from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    VideoViewSet, FotografiaViewSet, PlanViewSet,
    ClienteViewSet, ProyectoViewSet, ContactoViewSet, AuthViewSet
)

router = DefaultRouter()
router.register(r'videos', VideoViewSet, basename='video')
router.register(r'fotografias', FotografiaViewSet, basename='fotografia')
router.register(r'planes', PlanViewSet, basename='plan')
router.register(r'clientes', ClienteViewSet, basename='cliente')
router.register(r'proyectos', ProyectoViewSet, basename='proyecto')
router.register(r'contacto', ContactoViewSet, basename='contacto')
router.register(r'auth', AuthViewSet, basename='auth')

urlpatterns = [
    path('', include(router.urls)),
]