import React from 'react';
import { 
  BarChart3, 
  Bell,
  Eye,
  DollarSign
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Solicitudes Pendientes', value: '12', change: '+3', icon: Bell, color: '#ef4444' },
    { title: 'Proyectos Activos', value: '8', change: '+2', icon: Eye, color: '#6b7280' },
    { title: 'Pagos Pendientes', value: '$15,400', change: '-$2,100', icon: DollarSign, color: '#ef4444' },
    { title: 'Ingresos del Mes', value: '$45,200', change: '+$12,300', icon: BarChart3, color: '#374151' }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
        Dashboard
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} style={{ 
              backgroundColor: '#1f2937', 
              padding: '24px', 
              borderRadius: '12px',
              border: '1px solid #374151'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <IconComponent size={24} color={stat.color} />
                <span style={{ color: stat.change.startsWith('+') ? '#10b981' : '#ef4444', fontSize: '14px' }}>
                  {stat.change}
                </span>
              </div>
              <h3 style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '8px' }}>{stat.title}</h3>
              <p style={{ color: '#f9fafb', fontSize: '24px', fontWeight: 'bold' }}>{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h2 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
            Actividad Reciente
          </h2>
          <div>
            {[
              { action: 'Nueva solicitud recibida', client: 'María González', time: '2 min' },
              { action: 'Proyecto entregado', client: 'Empresa XYZ', time: '1 hora' },
              { action: 'Pago confirmado', client: 'Juan Pérez', time: '3 horas' }
            ].map((activity, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: i < 2 ? '1px solid #374151' : 'none'
              }}>
                <div>
                  <p style={{ color: '#f9fafb', fontSize: '14px', margin: 0 }}>{activity.action}</p>
                  <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0 }}>{activity.client}</p>
                </div>
                <span style={{ color: '#6b7280', fontSize: '12px' }}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '12px', border: '1px solid #374151' }}>
          <h2 style={{ color: '#f9fafb', fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
            Próximas Entregas
          </h2>
          <div>
            {[
              { project: 'Video Corporativo ABC', date: 'Mañana', status: 'urgent' },
              { project: 'Sesión Fotográfica', date: '3 días', status: 'warning' },
              { project: 'Edición Documental', date: '1 semana', status: 'normal' }
            ].map((delivery, i) => (
              <div key={i} style={{ 
                marginBottom: '16px', 
                padding: '12px',
                backgroundColor: '#374151',
                borderRadius: '8px',
                borderLeft: `4px solid ${delivery.status === 'urgent' ? '#ef4444' : delivery.status === 'warning' ? '#f59e0b' : '#10b981'}`
              }}>
                <p style={{ color: '#f9fafb', fontSize: '14px', fontWeight: '500', margin: 0 }}>{delivery.project}</p>
                <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0 }}>{delivery.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
