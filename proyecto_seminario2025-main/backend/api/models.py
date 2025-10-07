from django.db import models
from django.contrib.auth.models import User

class Video(models.Model):
    CATEGORIAS = [
        ('comercial', 'Comercial'),
        ('musical', 'Musical'),
        ('corporativo', 'Corporativo'),
        ('documental', 'Documental'),
        ('evento', 'Evento'),
        ('otro', 'Otro'),
    ]
    
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    url_video = models.URLField(max_length=500)
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)
    categoria = models.CharField(max_length=50, choices=CATEGORIAS, default='otro')
    duracion = models.CharField(max_length=20, blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    destacado = models.BooleanField(default=False)
    vistas = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-fecha_creacion']
        verbose_name = 'Video'
        verbose_name_plural = 'Videos'
    
    def __str__(self):
        return self.titulo


class Fotografia(models.Model):
    CATEGORIAS = [
        ('retrato', 'Retrato'),
        ('evento', 'Evento'),
        ('producto', 'Producto'),
        ('arquitectura', 'Arquitectura'),
        ('moda', 'Moda'),
        ('otro', 'Otro'),
    ]
    
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    imagen = models.ImageField(upload_to='fotografias/')
    categoria = models.CharField(max_length=50, choices=CATEGORIAS, default='otro')
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    destacado = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-fecha_creacion']
        verbose_name = 'Fotografía'
        verbose_name_plural = 'Fotografías'
    
    def __str__(self):
        return self.titulo


class Plan(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    caracteristicas = models.JSONField(default=list)
    duracion_dias = models.IntegerField(default=30)
    destacado = models.BooleanField(default=False)
    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['precio']
        verbose_name = 'Plan'
        verbose_name_plural = 'Planes'
    
    def __str__(self):
        return f"{self.nombre} - Q{self.precio}"


class Cliente(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    telefono = models.CharField(max_length=20, blank=True)
    empresa = models.CharField(max_length=200, blank=True)
    direccion = models.TextField(blank=True)
    plan_actual = models.ForeignKey(Plan, on_delete=models.SET_NULL, null=True, blank=True)
    fecha_inicio_plan = models.DateTimeField(null=True, blank=True)
    fecha_fin_plan = models.DateTimeField(null=True, blank=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
    
    def __str__(self):
        return self.usuario.username


class Proyecto(models.Model):
    ESTADOS = [
        ('pendiente', 'Pendiente'),
        ('en_proceso', 'En Proceso'),
        ('completado', 'Completado'),
        ('cancelado', 'Cancelado'),
    ]
    
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='proyectos')
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    tipo_servicio = models.CharField(max_length=100)
    estado = models.CharField(max_length=20, choices=ESTADOS, default='pendiente')
    fecha_inicio = models.DateField(null=True, blank=True)
    fecha_entrega = models.DateField(null=True, blank=True)
    presupuesto = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    notas = models.TextField(blank=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-fecha_creacion']
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'
    
    def __str__(self):
        return f"{self.titulo} - {self.cliente.usuario.username}"


class Contacto(models.Model):
    nombre = models.CharField(max_length=200)
    email = models.EmailField()
    telefono = models.CharField(max_length=20, blank=True)
    asunto = models.CharField(max_length=200)
    mensaje = models.TextField()
    fecha_envio = models.DateTimeField(auto_now_add=True)
    leido = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-fecha_envio']
        verbose_name = 'Mensaje de Contacto'
        verbose_name_plural = 'Mensajes de Contacto'
    
    def __str__(self):
        return f"{self.nombre} - {self.asunto}"