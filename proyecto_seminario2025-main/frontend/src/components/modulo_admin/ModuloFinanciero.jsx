import React, { useState } from 'react';
import { 
  DollarSign,
  BarChart3,
  AlertTriangle,
  Plus
} from 'lucide-react';

const ModuloFinanciero = () => {
  const [cotizaciones] = useState([
    { id: 1, client: 'Ana García', service: 'Video Boda', amount: 2500, status: 'pendiente', date: '2024-01-15' },
    { id: 2, client: 'Empresa XYZ', service: 'Corporativo', amount: 1800, status: 'aprobada', date: '2024-01-14' },
    { id: 3, client: 'Carlos López', service: 'Sesión Fotos', amount: 600, status: 'rechazada', date: '2024-01-13' }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'pendiente': return '#f59e0b';
      case 'aprobada': return '#10b981';
      case 'rechazada': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const ingresos = [
    { mes: 'Ene', ingresos: 45200, egresos: 12300 },
    { mes: 'Feb', ingresos: 38900, egresos: 15100 },
    { mes: 'Mar', ingresos: 52100, egresos: 18200 }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
          Módulo Financiero
        </h1>
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
          Nueva Cotización
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#1f2937', 
          padding: '24px', 
          borderRadius: '12px',
          border: '1px solid #374151'
        }}>
          <BarChart3 size={24} color="#f59e0b" style={{ marginBottom: '16px' }} />
          <h3 style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Ganancia Neta</h3>
          <p style={{ color: '#f9fafb', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>$33,900</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', overflow: 'hidden', border: '1px solid #374151' }}>
          <div style={{ padding: '20px 24px', backgroundColor: '#111827' }}>
            <h2 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', margin: 0 }}>
              Cotizaciones Recientes
            </h2>
          </div>
          <div style={{ padding: '16px 24px', backgroundColor: '#111827', display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr', gap: '16px' }}>
            <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Cliente</span>
            <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Servicio</span>
            <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Monto</span>
            <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Estado</span>
            <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Fecha</span>
          </div>
          
          {cotizaciones.map((cotizacion) => (
            <div key={cotizacion.id} style={{ 
              padding: '16px 24px', 
              display: 'grid', 
              gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr', 
              gap: '16px',
              alignItems: 'center',
              borderBottom: '1px solid #374151'
            }}>
              <span style={{ color: '#f9fafb', fontSize: '14px' }}>{cotizacion.client}</span>
              <span style={{ color: '#f9fafb', fontSize: '14px' }}>{cotizacion.service}</span>
              <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '600' }}>${cotizacion.amount}</span>
              <span style={{ 
                color: getStatusColor(cotizacion.status),
                fontSize: '12px',
                fontWeight: '500',
                padding: '4px 8px',
                backgroundColor: getStatusColor(cotizacion.status) + '20',
                borderRadius: '16px',
                textAlign: 'center',
                display: 'inline-block'
              }}>
                {cotizacion.status}
              </span>
              <span style={{ color: '#9ca3af', fontSize: '12px' }}>{cotizacion.date}</span>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h2 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', marginBottom: '16px', margin: '0 0 16px 0' }}>
            Resumen Financiero
          </h2>
          <div>
            {ingresos.map((mes, i) => (
              <div key={i} style={{ 
                marginBottom: '16px', 
                padding: '16px',
                backgroundColor: '#374151',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#f9fafb', fontSize: '14px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>
                  {mes.mes} 2024
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ color: '#9ca3af', fontSize: '12px' }}>Ingresos</span>
                  <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '600' }}>${mes.ingresos.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ color: '#9ca3af', fontSize: '12px' }}>Egresos</span>
                  <span style={{ color: '#ef4444', fontSize: '14px' }}>${mes.egresos.toLocaleString()}</span>
                </div>
                <div style={{ 
                  height: '4px', 
                  backgroundColor: '#4b5563', 
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${((mes.ingresos - mes.egresos) / mes.ingresos) * 100}%`,
                    backgroundColor: '#10b981'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuloFinanciero;
