import React, { useState } from 'react';
import { 
  Users,
  CheckCircle,
  Settings,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

const UsuariosRoles = () => {
  const [usuarios] = useState([
    { id: 1, name: 'Carlos Mendoza', email: 'carlos@tgofilms.com', role: 'Admin', status: 'activo', lastLogin: '2024-01-15 14:30' },
    { id: 2, name: 'María González', email: 'maria@tgofilms.com', role: 'Editor', status: 'activo', lastLogin: '2024-01-15 09:15' },
    { id: 3, name: 'Ana Rodríguez', email: 'ana@tgofilms.com', role: 'Finanzas', status: 'inactivo', lastLogin: '2024-01-12 16:45' }
  ]);

  const getRoleColor = (role) => {
    switch(role) {
      case 'Admin': return '#ef4444';
      case 'Editor': return '#10b981';
      case 'Finanzas': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
          Usuarios y Roles
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
          Nuevo Usuario
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: '#1f2937', 
          padding: '24px', 
          borderRadius: '12px',
          border: '1px solid #374151'
        }}>
          <Users size={24} color="#6b7280" style={{ marginBottom: '16px' }} />
          <h3 style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Total Usuarios</h3>
          <p style={{ color: '#f9fafb', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>3</p>
        </div>
        
        <div style={{ 
          backgroundColor: '#1f2937', 
          padding: '24px', 
          borderRadius: '12px',
          border: '1px solid #374151'
        }}>
          <CheckCircle size={24} color="#10b981" style={{ marginBottom: '16px' }} />
          <h3 style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Usuarios Activos</h3>
          <p style={{ color: '#f9fafb', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>2</p>
        </div>
        
        <div style={{ 
          backgroundColor: '#1f2937', 
          padding: '24px', 
          borderRadius: '12px',
          border: '1px solid #374151'
        }}>
          <Settings size={24} color="#f59e0b" style={{ marginBottom: '16px' }} />
          <h3 style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Administradores</h3>
          <p style={{ color: '#f9fafb', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>1</p>
        </div>
      </div>

      <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', overflow: 'hidden', border: '1px solid #374151' }}>
        <div style={{ padding: '16px 24px', backgroundColor: '#111827', display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 2fr 1fr', gap: '16px' }}>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Nombre</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Email</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Rol</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Estado</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Último Acceso</span>
          <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '14px' }}>Acciones</span>
        </div>
        
        {usuarios.map((usuario) => (
          <div key={usuario.id} style={{ 
            padding: '16px 24px', 
            display: 'grid', 
            gridTemplateColumns: '2fr 2fr 1fr 1fr 2fr 1fr', 
            gap: '16px',
            alignItems: 'center',
            borderBottom: '1px solid #374151'
          }}>
            <span style={{ color: '#f9fafb', fontSize: '14px', fontWeight: '500' }}>{usuario.name}</span>
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>{usuario.email}</span>
            <span style={{ 
              color: getRoleColor(usuario.role),
              fontSize: '12px',
              fontWeight: '500',
              padding: '4px 8px',
              backgroundColor: getRoleColor(usuario.role) + '20',
              borderRadius: '16px',
              textAlign: 'center',
              display: 'inline-block'
            }}>
              {usuario.role}
            </span>
            <span style={{ 
              color: usuario.status === 'activo' ? '#10b981' : '#ef4444',
              fontSize: '12px',
              fontWeight: '500',
              padding: '4px 8px',
              backgroundColor: (usuario.status === 'activo' ? '#10b981' : '#ef4444') + '20',
              borderRadius: '16px',
              textAlign: 'center',
              display: 'inline-block'
            }}>
              {usuario.status}
            </span>
            <span style={{ color: '#9ca3af', fontSize: '12px' }}>{usuario.lastLogin}</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                <Edit size={16} color="#6b7280" />
              </button>
              <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                <Trash2 size={16} color="#ef4444" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '32px', backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
        <h2 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', marginBottom: '16px', margin: '0 0 16px 0' }}>
          Permisos por Rol
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[
            {
              role: 'Admin',
              color: '#ef4444',
              permisos: ['Acceso completo', 'Gestión de usuarios', 'Configuración del sistema', 'Reportes financieros']
            },
            {
              role: 'Editor',
              color: '#10b981',
              permisos: ['Gestión de proyectos', 'Subir contenido', 'Calendario', 'Contactos']
            },
            {
              role: 'Finanzas',
              color: '#f59e0b',
              permisos: ['Módulo financiero', 'Cotizaciones', 'Facturación', 'Reportes']
            }
          ].map((roleInfo, i) => (
            <div key={i} style={{ 
              backgroundColor: '#374151',
              padding: '20px',
              borderRadius: '8px',
              border: `2px solid ${roleInfo.color}20`
            }}>
              <h3 style={{ 
                color: roleInfo.color, 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '12px',
                margin: '0 0 12px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Settings size={16} />
                {roleInfo.role}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {roleInfo.permisos.map((permiso, j) => (
                  <li key={j} style={{ 
                    color: '#d1d5db', 
                    fontSize: '14px', 
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <CheckCircle size={14} color={roleInfo.color} />
                    {permiso}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsuariosRoles;
