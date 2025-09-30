import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  Package, 
  DollarSign, 
  Settings
} from 'lucide-react';

// Importar todos los módulos
import Dashboard from './Dashboard';
import GestionContactos from './GestionContactos';
import CalendarioInterno from './CalendarioInterno';
import GestionPaquetes from './GestionPaquetes';
import ModuloFinanciero from './ModuloFinanciero';
import UsuariosRoles from './UsuariosRoles';

const App = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const modules = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'contactos', name: 'Contactos', icon: Users },
    { id: 'calendario', name: 'Calendario', icon: Calendar },
    { id: 'paquetes', name: 'Paquetes', icon: Package },
    { id: 'financiero', name: 'Financiero', icon: DollarSign },
    { id: 'usuarios', name: 'Usuarios', icon: Settings }
  ];

  const renderActiveModule = () => {
    switch(activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'contactos':
        return <GestionContactos />;
      case 'calendario':
        return <CalendarioInterno />;
      case 'paquetes':
        return <GestionPaquetes />;
      case 'financiero':
        return <ModuloFinanciero />;
      case 'usuarios':
        return <UsuariosRoles />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      backgroundColor: '#111827',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{ 
        width: '280px', 
        backgroundColor: '#1f2937', 
        borderRight: '1px solid #374151',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo */}
        <div style={{ 
          padding: '24px', 
          borderBottom: '1px solid #374151'
        }}>
          <h1 style={{ 
            color: '#ef4444', 
            fontSize: '24px', 
            fontWeight: 'bold', 
            margin: 0,
            textAlign: 'center'
          }}>
            TGOFILMS
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            fontSize: '12px', 
            textAlign: 'center', 
            margin: '4px 0 0 0' 
          }}>
            Panel Administrativo
          </p>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule === module.id;
            
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  backgroundColor: isActive ? '#ef444420' : 'transparent',
                  color: isActive ? '#ef4444' : '#d1d5db',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '400',
                  borderLeft: isActive ? '4px solid #ef4444' : '4px solid transparent',
                  transition: 'all 0.2s ease',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#374151';
                    e.currentTarget.style.color = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#d1d5db';
                  }
                }}
              >
                <Icon size={20} />
                {module.name}
              </button>
            );
          })}
        </nav>

        {/* User Info */}
        <div style={{ 
          padding: '16px 24px', 
          borderTop: '1px solid #374151',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#ef4444',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
              A
            </span>
          </div>
          <div>
            <p style={{ color: '#f9fafb', fontSize: '14px', margin: 0, fontWeight: '500' }}>
              Admin User
            </p>
            <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0 }}>
              admin@tgofilms.com
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        flex: 1, 
        backgroundColor: '#f9fafb',
        overflow: 'auto'
      }}>
        {renderActiveModule()}
      </div>
    </div>
  );
};

export default App;