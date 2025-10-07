from django.contrib import admin
from .models import Video, Fotografia, Plan, Cliente, Proyecto, Contacto


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'categoria', 'destacado', 'vistas', 'fecha_creacion')
    list_filter = ('categoria', 'destacado', 'fecha_creacion')
    search_fields = ('titulo', 'descripcion')
    list_editable = ('destacado',)
    ordering = ('-fecha_creacion',)


@admin.register(Fotografia)
class FotografiaAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'categoria', 'destacado', 'fecha_creacion')
    list_filter = ('categoria', 'destacado', 'fecha_creacion')
    search_fields = ('titulo', 'descripcion')
    list_editable = ('destacado',)
    ordering = ('-fecha_creacion',)


@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'duracion_dias', 'destacado', 'activo')
    list_filter = ('destacado', 'activo')
    search_fields = ('nombre', 'descripcion')
    list_editable = ('destacado', 'activo')


@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'telefono', 'empresa', 'plan_actual', 'fecha_registro')
    list_filter = ('plan_actual', 'fecha_registro')
    search_fields = ('usuario__username', 'usuario__email', 'empresa')
    ordering = ('-fecha_registro',)


@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'cliente', 'estado', 'tipo_servicio', 'fecha_inicio', 'fecha_entrega')
    list_filter = ('estado', 'fecha_creacion')
    search_fields = ('titulo', 'descripcion', 'cliente__usuario__username')
    list_editable = ('estado',)
    ordering = ('-fecha_creacion',)


@admin.register(Contacto)
class ContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email', 'asunto', 'fecha_envio', 'leido')
    list_filter = ('leido', 'fecha_envio')
    search_fields = ('nombre', 'email', 'asunto', 'mensaje')
    list_editable = ('leido',)
    ordering = ('-fecha_envio',)