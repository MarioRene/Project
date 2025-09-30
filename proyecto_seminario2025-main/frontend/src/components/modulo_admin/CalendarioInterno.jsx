import React, { useState } from 'react';
import { 
  Calendar,
  Plus,
  Clock
} from 'lucide-react';

const CalendarioInterno = () => {
  const [eventos] = useState([
    { id: 1, title: 'Sesión Fotográfica - Hotel Plaza', date: '2024-01-16', time: '09:00', type: 'sesion' },
    { id: 2, title: 'Entrega Video Corporativo', date: '2024-01-17', time: '14:00', type: 'entrega' },
    { id: 3, title: 'Reunión Cliente - Boda Sara & Miguel', date: '2024-01-18', time: '16:30', type: 'reunion' }
  ]);

  const getEventTypeColor = (type) => {
    switch(type) {
      case 'sesion': return '#ef4444';
      case 'entrega': return '#10b981';
      case 'reunion': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
          Calendario Interno
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
          Nuevo Evento
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' }}>
        <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ color: '#f9fafb', fontSize: '20px', fontWeight: '600', margin: 0 }}>
              Enero 2024
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '16px' }}>
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
              <div key={day} style={{ 
                padding: '12px', 
                textAlign: 'center', 
                color: '#9ca3af', 
                fontSize: '14px', 
                fontWeight: '600' 
              }}>
                {day}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6 + 1;
              const isCurrentMonth = day > 0 && day <= 31;
              const hasEvent = isCurrentMonth && [16, 17, 18].includes(day);
              
              return (
                <div key={i} style={{ 
                  padding: '12px', 
                  textAlign: 'center',
                  backgroundColor: hasEvent ? '#ef444420' : 'transparent',
                  border: hasEvent ? '1px solid #ef4444' : '1px solid transparent',
                  borderRadius: '8px',
                  cursor: isCurrentMonth ? 'pointer' : 'default',
                  minHeight: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ 
                    color: isCurrentMonth ? (hasEvent ? '#ef4444' : '#f9fafb') : '#4b5563',
                    fontSize: '14px',
                    fontWeight: hasEvent ? '600' : 'normal'
                  }}>
                    {isCurrentMonth ? day : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h2 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', marginBottom: '16px', margin: '0 0 16px 0' }}>
            Próximos Eventos
          </h2>
          
          <div>
            {eventos.map(evento => (
              <div key={evento.id} style={{ 
                marginBottom: '16px', 
                padding: '16px',
                backgroundColor: '#374151',
                borderRadius: '8px',
                borderLeft: `4px solid ${getEventTypeColor(evento.type)}`
              }}>
                <h3 style={{ color: '#f9fafb', fontSize: '14px', fontWeight: '600', marginBottom: '8px', margin: '0 0 8px 0' }}>
                  {evento.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Calendar size={14} color="#9ca3af" />
                  <span style={{ color: '#9ca3af', fontSize: '12px' }}>{evento.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={14} color="#9ca3af" />
                  <span style={{ color: '#9ca3af', fontSize: '12px' }}>{evento.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarioInterno;

