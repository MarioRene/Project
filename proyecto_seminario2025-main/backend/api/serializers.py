from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Video, Fotografia, Plan, Cliente, Proyecto, Contacto


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
        read_only_fields = ('fecha_creacion', 'fecha_actualizacion', 'vistas')


class FotografiaSerializer(serializers.ModelSerializer):
    imagen_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Fotografia
        fields = '__all__'
        read_only_fields = ('fecha_creacion', 'fecha_actualizacion')
    
    def get_imagen_url(self, obj):
        if obj.imagen:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.imagen.url)
        return None


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'
        read_only_fields = ('fecha_creacion',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')
        read_only_fields = ('id',)


class ClienteSerializer(serializers.ModelSerializer):
    usuario = UserSerializer(read_only=True)
    plan_nombre = serializers.CharField(source='plan_actual.nombre', read_only=True)
    
    class Meta:
        model = Cliente
        fields = '__all__'
        read_only_fields = ('fecha_registro',)


class ProyectoSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.CharField(source='cliente.usuario.get_full_name', read_only=True)
    
    class Meta:
        model = Proyecto
        fields = '__all__'
        read_only_fields = ('fecha_creacion', 'fecha_actualizacion')


class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = '__all__'
        read_only_fields = ('fecha_envio', 'leido')


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2', 'first_name', 'last_name')
    
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden."})
        return attrs
    
    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        Cliente.objects.create(usuario=user)
        return user