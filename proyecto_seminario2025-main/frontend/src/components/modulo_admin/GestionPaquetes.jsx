import React, { useState } from 'react';
import { 
  Plus,
  Edit,
  Trash2,
  Package
} from 'lucide-react';

const GestionPaquetes = () => {
  const [paquetes] = useState([
    { id: 1, name: 'Boda Completa', price: 2500, services: 8, status: 'activo' },
    { id: 2, name: 'Video Corporativo', price: 1200, services: 5, status: 'activo' },
    { id: 3, name: 'Sesión Fotográfica', price: 400, services: 3, status: 'inactivo' }
  ]);

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
          Gestión de Paquetes y Portafolio
        </h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            backgroundColor: '#374151',
            color: '#f9fafb',
            padding: '12px 20px',
            borderRadius: '8px',
            border: '1px solid #4b5563',
            cursor: 'pointer'
          }}>
            Subir Proyecto
          </button>
          <button style={{
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Plus size={16} />
            Nuevo Paquete
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {paquetes.map(paquete => (
          <div key={paquete.id} style={{ 
            backgroundColor: '#1f2937', 
            padding: '24px', 
            borderRadius: '12px',
            border: '1px solid #374151'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', margin: 0 }}>{paquete.name}</h3>
              <span style={{ 
                color: paquete.status === 'activo' ? '#10b981' : '#6b7280',
                fontSize: '12px',
                fontWeight: '500',
                padding: '4px 8px',
                backgroundColor: (paquete.status === 'activo' ? '#10b981' : '#6b7280') + '20',
                borderRadius: '16px'
              }}>
                {paquete.status}
              </span>
            </div>
            <p style={{ color: '#ef4444', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', margin: '0 0 8px 0' }}>
              ${paquete.price}
            </p>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px', margin: '0 0 16px 0' }}>
              {paquete.services} servicios incluidos
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                backgroundColor: '#374151',
                color: '#f9fafb',
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #4b5563',
                cursor: 'pointer',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Edit size={14} />
                Editar
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: '#ef4444',
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #ef4444',
                cursor: 'pointer',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Trash2 size={14} />
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
        <h2 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', marginBottom: '16px', margin: '0 0 16px 0' }}>
          Proyectos Recientes en Portafolio
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ 
              backgroundColor: '#374151',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div style={{ 
                height: '120px', 
                backgroundColor: '#4b5563',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Package size={32} color="#9ca3af" />
              </div>
              <div style={{ padding: '12px' }}>
                <h4 style={{ color: '#f9fafb', fontSize: '14px', fontWeight: '500', margin: '0 0 4px 0' }}>
                  Proyecto {i}
                </h4>
                <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0 }}>Boda · Enero 2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GestionPaquetes;
