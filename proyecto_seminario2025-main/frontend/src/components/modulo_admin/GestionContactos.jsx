import React, { useState } from 'react';
import { 
  Search,
  Filter,
  Plus,
  Eye,
  Edit
} from 'lucide-react';

const GestionContactos = () => {
  const [tickets] = useState([
    { id: 1, client: 'Ana Rodríguez', subject: 'Consulta Video Boda', status: 'nuevo', priority: 'alta', date: '2024-01-15' },
    { id: 2, client: 'Empresa Tech', subject: 'Cotización Corporativo', status: 'en_proceso', priority: 'media', date: '2024-01-14' },
    { id: 3, client: 'Carlos Mendez', subject: 'Seguimiento Proyecto', status: 'cerrado', priority: 'baja', date: '2024-01-13' }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'nuevo': return '#ef4444';
      case 'en_proceso': return '#f59e0b';
      case 'cerrado': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'alta': return '#ef4444';
      case 'media': return '#f59e0b';
      case 'baja': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
          Gestión de Contactos
        </h1>
        <button 
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onClick={() => alert('Funcionalidad: Nuevo Ticket')}
        >
          <Plus size={16} />
          Nuevo Ticket
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280', pointerEvents: 'none' }} />
          <input 
            type="text" 
            placeholder="Buscar tickets..." 
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              backgroundColor: '#374151',
              border: '1px solid #4b5563',
              borderRadius: '8px',
              color: '#f9fafb',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <button style={{
          backgroundColor: '#374151',
          color: '#f9fafb',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #4b5563',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Filter size={16} />
          Filtrar
        </button>
      </div>

      <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', overflow: 'hidden', border: '1px solid #374151' }}>
        <div style={{ padding: '16px 24px', backgroundColor: '#111827', display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr 1fr', gap: '16px' }}>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Cliente</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Asunto</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Estado</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Prioridad</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Fecha</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Acciones</span>
        </div>
        
        {tickets.map((ticket) => (
          <div key={ticket.id} style={{ 
            padding: '16px 24px', 
            display: 'grid', 
            gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr 1fr', 
            gap: '16px',
            alignItems: 'center',
            borderBottom: '1px solid #374151'
          }}>
            <span style={{ color: '#f9fafb', fontSize: '14px' }}>{ticket.client}</span>
            <span style={{ color: '#f9fafb', fontSize: '14px' }}>{ticket.subject}</span>
            <span style={{ 
              color: getStatusColor(ticket.status),
              fontSize: '12px',
              fontWeight: '500',
              padding: '4px 8px',
              backgroundColor: getStatusColor(ticket.status) + '20',
              borderRadius: '16px',
              textAlign: 'center',
              display: 'inline-block'
            }}>
              {ticket.status.replace('_', ' ')}
            </span>
            <span style={{ 
              color: getPriorityColor(ticket.priority),
              fontSize: '12px',
              fontWeight: '500',
              padding: '4px 8px',
              backgroundColor: getPriorityColor(ticket.priority) + '20',
              borderRadius: '16px',
              textAlign: 'center',
              display: 'inline-block'
            }}>
              {ticket.priority}
            </span>
            <span style={{ color: '#9ca3af', fontSize: '12px' }}>{ticket.date}</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                <Eye size={16} color="#6b7280" />
              </button>
              <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                <Edit size={16} color="#6b7280" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionContactos;
