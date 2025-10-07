#!/usr/bin/env python
"""
Script para cargar datos de ejemplo en la base de datos
Ejecutar desde la carpeta backend/: python load_data.py
"""

import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import Video, Fotografia, Plan
from django.contrib.auth.models import User

def crear_videos():
    """Crear videos de ejemplo"""
    print("📹 Creando videos de ejemplo...")
    
    videos = [
        {
            'titulo': 'Comercial Corporativo - Tech Solutions',
            'descripcion': 'Video promocional para empresa de tecnología. Producción completa con dron y cámara 4K.',
            'url_video': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'categoria': 'comercial',
            'duracion': '2:30',
            'destacado': True,
            'vistas': 1250
        },
        {
            'titulo': 'Video Musical - Artista Local 2024',
            'descripcion': 'Producción de video musical completa. Locaciones en Guatemala City.',
            'url_video': 'https://www.youtube.com/watch?v=example2',
            'categoria': 'musical',
            'duracion': '3:45',
            'destacado': True,
            'vistas': 3400
        },
        {
            'titulo': 'Evento Corporativo - Conferencia 2024',
            'descripcion': 'Cobertura completa de evento empresarial con 3 cámaras y audio profesional.',
            'url_video': 'https://www.youtube.com/watch?v=example3',
            'categoria': 'evento',
            'duracion': '5:20',
            'destacado': False,
            'vistas': 890
        },
        {
            'titulo': 'Documental - Historia Local',
            'descripcion': 'Mini documental sobre la cultura guatemalteca. Filmación en 4K.',
            'url_video': 'https://www.youtube.com/watch?v=example4',
            'categoria': 'documental',
            'duracion': '12:15',
            'destacado': True,
            'vistas': 2100
        },
        {
            'titulo': 'Video Corporativo - Presentación de Empresa',
            'descripcion': 'Video institucional para empresa de servicios. Incluye entrevistas y b-roll.',
            'url_video': 'https://www.youtube.com/watch?v=example5',
            'categoria': 'corporativo',
            'duracion': '4:00',
            'destacado': False,
            'vistas': 670
        },
        {
            'titulo': 'Comercial - Restaurante Premium',
            'descripcion': 'Video publicitario para restaurante gourmet. Fotografía gastronómica en movimiento.',
            'url_video': 'https://www.youtube.com/watch?v=example6',
            'categoria': 'comercial',
            'duracion': '1:45',
            'destacado': False,
            'vistas': 1890
        },
        {
            'titulo': 'Boda - Maria & Carlos',
            'descripcion': 'Cobertura completa de boda. Incluye ceremonia, recepción y highlights.',
            'url_video': 'https://www.youtube.com/watch?v=example7',
            'categoria': 'evento',
            'duracion': '8:30',
            'destacado': False,
            'vistas': 450
        },
        {
            'titulo': 'Video Musical - Banda de Rock',
            'descripcion': 'Video musical con efectos especiales y color grading profesional.',
            'url_video': 'https://www.youtube.com/watch?v=example8',
            'categoria': 'musical',
            'duracion': '4:20',
            'destacado': True,
            'vistas': 5600
        }
    ]
    
    created_count = 0
    for video_data in videos:
        video, created = Video.objects.get_or_create(
            titulo=video_data['titulo'],
            defaults=video_data
        )
        if created:
            created_count += 1
            print(f"   ✅ Creado: {video.titulo}")
        else:
            print(f"   ⏭️  Ya existe: {video.titulo}")
    
    print(f"✅ Videos creados: {created_count}/{len(videos)}\n")


def crear_fotografias():
    """Crear fotografías de ejemplo"""
    print("📸 Creando fotografías de ejemplo...")
    
    fotografias = [
        {
            'titulo': 'Retrato Profesional - CEO',
            'descripcion': 'Sesión de retratos corporativos para ejecutivos.',
            'categoria': 'retrato',
            'destacado': True
        },
        {
            'titulo': 'Evento Empresarial 2024',
            'descripcion': 'Cobertura fotográfica de conferencia internacional.',
            'categoria': 'evento',
            'destacado': True
        },
        {
            'titulo': 'Producto - Línea Cosmética',
            'descripcion': 'Fotografía de producto con iluminación de estudio.',
            'categoria': 'producto',
            'destacado': False
        },
        {
            'titulo': 'Arquitectura - Edificio Moderno',
            'descripcion': 'Fotografía arquitectónica exterior e interior.',
            'categoria': 'arquitectura',
            'destacado': True
        },
        {
            'titulo': 'Moda - Colección Primavera',
            'descripcion': 'Sesión de moda con modelos profesionales.',
            'categoria': 'moda',
            'destacado': True
        },
        {
            'titulo': 'Retrato Artístico',
            'descripcion': 'Sesión de retratos con iluminación creativa.',
            'categoria': 'retrato',
            'destacado': False
        },
        {
            'titulo': 'Producto - Tecnología',
            'descripcion': 'Fotografía de productos tecnológicos para e-commerce.',
            'categoria': 'producto',
            'destacado': False
        },
        {
            'titulo': 'Evento - Boda Elegante',
            'descripcion': 'Cobertura fotográfica completa de boda.',
            'categoria': 'evento',
            'destacado': False
        },
        {
            'titulo': 'Arquitectura - Interior Minimalista',
            'descripcion': 'Fotografía de interiores para revista de arquitectura.',
            'categoria': 'arquitectura',
            'destacado': False
        },
        {
            'titulo': 'Moda - Editorial',
            'descripcion': 'Sesión editorial para revista de moda.',
            'categoria': 'moda',
            'destacado': True
        }
    ]
    
    created_count = 0
    for foto_data in fotografias:
        foto, created = Fotografia.objects.get_or_create(
            titulo=foto_data['titulo'],
            defaults=foto_data
        )
        if created:
            created_count += 1
            print(f"   ✅ Creada: {foto.titulo}")
        else:
            print(f"   ⏭️  Ya existe: {foto.titulo}")
    
    print(f"✅ Fotografías creadas: {created_count}/{len(fotografias)}\n")


def crear_planes():
    """Crear planes de servicio"""
    print("💰 Creando planes de servicio...")
    
    planes = [
        {
            'nombre': 'Plan Básico',
            'descripcion': 'Ideal para emprendedores y pequeños negocios que están comenzando',
            'precio': 500.00,
            'caracteristicas': [
                '1 video mensual de hasta 3 minutos',
                '10 fotografías editadas profesionalmente',
                'Edición básica con color grading',
                'Entrega en 7 días hábiles',
                '1 ronda de correcciones',
                'Formato para redes sociales'
            ],
            'duracion_dias': 30,
            'destacado': False,
            'activo': True
        },
        {
            'nombre': 'Plan Profesional',
            'descripcion': 'Para negocios en crecimiento que necesitan contenido regular',
            'precio': 1200.00,
            'caracteristicas': [
                '3 videos mensuales de hasta 5 minutos',
                '30 fotografías editadas profesionalmente',
                'Edición avanzada con efectos especiales',
                'Entrega en 5 días hábiles',
                'Revisiones ilimitadas',
                'Formatos para todas las plataformas',
                'Soporte prioritario',
                'Planificación de contenido mensual'
            ],
            'duracion_dias': 30,
            'destacado': True,
            'activo': True
        },
        {
            'nombre': 'Plan Enterprise',
            'descripcion': 'Solución completa para empresas con altas exigencias de contenido',
            'precio': 2500.00,
            'caracteristicas': [
                'Videos ilimitados',
                'Fotografías ilimitadas',
                'Edición premium con motion graphics',
                'Entrega en 3 días hábiles',
                'Revisiones ilimitadas',
                'Todos los formatos y plataformas',
                'Soporte 24/7',
                'Equipo de dron incluido',
                'Equipo dedicado a tu proyecto',
                'Estrategia de contenido personalizada',
                'Reportes mensuales de rendimiento'
            ],
            'duracion_dias': 30,
            'destacado': False,
            'activo': True
        },
        {
            'nombre': 'Plan Evento',
            'descripcion': 'Paquete especial para eventos únicos como bodas, conferencias o lanzamientos',
            'precio': 800.00,
            'caracteristicas': [
                'Cobertura de evento de hasta 8 horas',
                '2 videógrafos profesionales',
                '1 fotógrafo profesional',
                'Video highlights de 3-5 minutos',
                '50 fotografías editadas',
                'Entrega en 10 días hábiles',
                'Audio profesional incluido',
                'Backup de todo el material'
            ],
            'duracion_dias': 1,
            'destacado': False,
            'activo': True
        }
    ]
    
    created_count = 0
    for plan_data in planes:
        plan, created = Plan.objects.get_or_create(
            nombre=plan_data['nombre'],
            defaults=plan_data
        )
        if created:
            created_count += 1
            print(f"   ✅ Creado: {plan.nombre} - Q{plan.precio}")
        else:
            print(f"   ⏭️  Ya existe: {plan.nombre}")
    
    print(f"✅ Planes creados: {created_count}/{len(planes)}\n")


def main():
    """Función principal"""
    print("\n" + "="*60)
    print("🎬 CARGANDO DATOS DE EJEMPLO PARA TGO FILMS")
    print("="*60 + "\n")
    
    try:
        crear_videos()
        crear_fotografias()
        crear_planes()
        
        print("="*60)
        print("✅ ¡DATOS CARGADOS EXITOSAMENTE!")
        print("="*60)
        print("\n📊 RESUMEN:")
        print(f"   Videos: {Video.objects.count()}")
        print(f"   Fotografías: {Fotografia.objects.count()}")
        print(f"   Planes: {Plan.objects.count()}")
        print(f"   Usuarios: {User.objects.count()}")
        print("\n🚀 El backend está listo para usar!")
        print("   Admin: http://localhost:8000/admin")
        print("   API: http://localhost:8000/api/")
        print("\n")
        
    except Exception as e:
        print(f"\n❌ ERROR: {str(e)}")
        print("Asegúrate de que:")
        print("  1. La base de datos está creada")
        print("  2. Has ejecutado las migraciones (python manage.py migrate)")
        print("  3. El archivo .env está configurado correctamente\n")


if __name__ == '__main__':
    main()