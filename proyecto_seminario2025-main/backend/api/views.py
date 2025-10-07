from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Video, Fotografia, Plan, Cliente, Proyecto, Contacto
from .serializers import (
    VideoSerializer, FotografiaSerializer, PlanSerializer,
    ClienteSerializer, ProyectoSerializer, ContactoSerializer,
    RegisterSerializer, UserSerializer
)


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['titulo', 'descripcion', 'categoria']
    ordering_fields = ['fecha_creacion', 'vistas', 'titulo']
    
    @action(detail=False, methods=['get'])
    def destacados(self, request):
        videos = self.queryset.filter(destacado=True)
        serializer = self.get_serializer(videos, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def por_categoria(self, request):
        categoria = request.query_params.get('categoria', None)
        if categoria:
            videos = self.queryset.filter(categoria=categoria)
            serializer = self.get_serializer(videos, many=True)
            return Response(serializer.data)
        return Response({'error': 'Debe especificar una categoría'}, status=400)
    
    @action(detail=True, methods=['post'])
    def incrementar_vistas(self, request, pk=None):
        video = self.get_object()
        video.vistas += 1
        video.save()
        return Response({'vistas': video.vistas})


class FotografiaViewSet(viewsets.ModelViewSet):
    queryset = Fotografia.objects.all()
    serializer_class = FotografiaSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['titulo', 'descripcion', 'categoria']
    ordering_fields = ['fecha_creacion', 'titulo']
    
    @action(detail=False, methods=['get'])
    def destacadas(self, request):
        fotos = self.queryset.filter(destacado=True)
        serializer = self.get_serializer(fotos, many=True, context={'request': request})
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def por_categoria(self, request):
        categoria = request.query_params.get('categoria', None)
        if categoria:
            fotos = self.queryset.filter(categoria=categoria)
            serializer = self.get_serializer(fotos, many=True, context={'request': request})
            return Response(serializer.data)
        return Response({'error': 'Debe especificar una categoría'}, status=400)


class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.filter(activo=True)
    serializer_class = PlanSerializer
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['get'])
    def destacados(self, request):
        planes = self.queryset.filter(destacado=True)
        serializer = self.get_serializer(planes, many=True)
        return Response(serializer.data)


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]
    
    @action(detail=False, methods=['get'])
    def mi_perfil(self, request):
        try:
            cliente = Cliente.objects.get(usuario=request.user)
            serializer = self.get_serializer(cliente)
            return Response(serializer.data)
        except Cliente.DoesNotExist:
            return Response({'error': 'Cliente no encontrado'}, status=404)
    
    @action(detail=True, methods=['post'])
    def asignar_plan(self, request, pk=None):
        cliente = self.get_object()
        plan_id = request.data.get('plan_id')
        try:
            plan = Plan.objects.get(id=plan_id)
            cliente.plan_actual = plan
            cliente.save()
            return Response({'message': 'Plan asignado correctamente'})
        except Plan.DoesNotExist:
            return Response({'error': 'Plan no encontrado'}, status=404)


class ProyectoViewSet(viewsets.ModelViewSet):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if self.request.user.is_staff:
            return Proyecto.objects.all()
        try:
            cliente = Cliente.objects.get(usuario=self.request.user)
            return Proyecto.objects.filter(cliente=cliente)
        except Cliente.DoesNotExist:
            return Proyecto.objects.none()
    
    @action(detail=False, methods=['get'])
    def mis_proyectos(self, request):
        try:
            cliente = Cliente.objects.get(usuario=request.user)
            proyectos = Proyecto.objects.filter(cliente=cliente)
            serializer = self.get_serializer(proyectos, many=True)
            return Response(serializer.data)
        except Cliente.DoesNotExist:
            return Response({'error': 'Cliente no encontrado'}, status=404)
    
    @action(detail=True, methods=['patch'])
    def cambiar_estado(self, request, pk=None):
        proyecto = self.get_object()
        nuevo_estado = request.data.get('estado')
        if nuevo_estado in dict(Proyecto.ESTADOS):
            proyecto.estado = nuevo_estado
            proyecto.save()
            return Response({'message': 'Estado actualizado', 'estado': proyecto.estado})
        return Response({'error': 'Estado inválido'}, status=400)


class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer
    
    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]
    
    @action(detail=True, methods=['post'])
    def marcar_leido(self, request, pk=None):
        contacto = self.get_object()
        contacto.leido = True
        contacto.save()
        return Response({'message': 'Mensaje marcado como leído'})


class AuthViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                'message': 'Usuario registrado exitosamente',
                'user': UserSerializer(user).data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)
        if user:
            return Response({
                'message': 'Login exitoso',
                'user': UserSerializer(user).data
            })
        return Response({
            'error': 'Credenciales inválidas'
        }, status=status.HTTP_401_UNAUTHORIZED)