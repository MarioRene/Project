import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Camera, Film, Mic } from 'lucide-react';

const AuthSystem = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Iniciando sesión:', { email: formData.email, password: formData.password });
      alert('¡Bienvenido de vuelta!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      console.log('Registrando usuario:', formData);
      alert('¡Cuenta creada exitosamente!');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      background: 'linear-gradient(135deg, #000000 0%, #1f2937 50%, #374151 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    decorativeCircle1: {
      position: 'absolute',
      top: '-160px',
      right: '-160px',
      width: '320px',
      height: '320px',
      background: '#6b7280',
      borderRadius: '50%',
      opacity: '0.15',
      filter: 'blur(40px)',
      animation: 'pulse 3s ease-in-out infinite'
    },
    decorativeCircle2: {
      position: 'absolute',
      bottom: '-160px',
      left: '-160px',
      width: '320px',
      height: '320px',
      background: '#78716c',
      borderRadius: '50%',
      opacity: '0.15',
      filter: 'blur(40px)',
      animation: 'pulse 3s ease-in-out infinite 2s'
    },
    mainCard: {
      width: '100%',
      maxWidth: '1200px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '0',
      background: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      zIndex: 1
    },
    leftPanel: {
      position: 'relative',
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '600px',
      background: 'linear-gradient(135deg, #111827 0%, #000000 100%)',
      backgroundImage: `url('https://images.unsplash.com/photo-1620854558861-55d82aa7a48f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#f5f5f4'
    },
    leftPanelOverlay: {
      position: 'absolute',
      inset: '0',
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(17, 24, 39, 0.8) 100%)'
    },
    contentWrapper: {
      position: 'relative',
      zIndex: '10'
    },
    brandingSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '32px'
    },
    logoContainer: {
      padding: '12px',
      borderRadius: '16px',
      background: 'rgba(245, 245, 244, 0.2)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(168, 162, 158, 0.2)'
    },
    brandTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#f5f5f4',
      margin: '0'
    },
    heroSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    heroTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#f5f5f4',
      lineHeight: '1.2',
      margin: '0'
    },
    heroDescription: {
      color: '#e7e5e4',
      fontSize: '18px',
      lineHeight: '1.6',
      margin: '0'
    },
    iconContainer: {
      display: 'flex',
      gap: '16px'
    },
    iconBox: {
      padding: '12px',
      borderRadius: '12px',
      background: 'rgba(245, 245, 244, 0.1)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(168, 162, 158, 0.2)'
    },
    testimonialCard: {
      borderRadius: '16px',
      padding: '24px',
      background: 'rgba(245, 245, 244, 0.1)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(168, 162, 158, 0.2)'
    },
    testimonialContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    testimonialImage: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid rgba(168, 162, 158, 0.3)'
    },
    testimonialText: {
      color: '#f5f5f4',
      fontWeight: '500',
      margin: '0 0 4px 0'
    },
    testimonialAuthor: {
      color: '#d6d3d1',
      fontSize: '14px',
      margin: '0'
    },
    rightPanel: {
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#fafaf9'
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto'
    },
    headerSection: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    formTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#111827',
      margin: '0 0 8px 0'
    },
    formSubtitle: {
      color: '#6b7280',
      margin: '0'
    },
    formFields: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    fieldLabel: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    inputWrapper: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6b7280',
      width: '20px',
      height: '20px'
    },
    inputField: {
      width: '100%',
      paddingLeft: '40px',
      paddingRight: '16px',
      paddingTop: '12px',
      paddingBottom: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '12px',
      background: '#f5f5f4',
      transition: 'all 0.2s',
      fontSize: '16px',
      boxSizing: 'border-box',
      outline: 'none'
    },
    passwordToggle: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#6b7280',
      cursor: 'pointer',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    rememberSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    checkboxWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    checkbox: {
      width: '16px',
      height: '16px',
      accentColor: '#111827',
      marginRight: '8px'
    },
    checkboxLabel: {
      fontSize: '14px',
      color: '#374151'
    },
    forgotPassword: {
      fontSize: '14px',
      color: '#111827',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      textDecoration: 'none'
    },
    submitButton: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '12px',
      fontWeight: '600',
      color: '#f5f5f4',
      background: 'linear-gradient(to right, #111827, #000000)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontSize: '16px',
      transform: 'scale(1)'
    },
    toggleSection: {
      textAlign: 'center'
    },
    toggleText: {
      color: '#6b7280',
      margin: '0'
    },
    toggleButton: {
      marginLeft: '8px',
      color: '#111827',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '16px',
      textDecoration: 'none'
    },
    footer: {
      marginTop: '32px',
      paddingTop: '24px',
      borderTop: '1px solid #e5e7eb'
    },
    footerText: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#9ca3af',
      margin: '0 0 8px 0'
    },
    footerLinks: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap'
    },
    footerLink: {
      color: '#111827',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.decorativeCircle1}></div>
      <div style={styles.decorativeCircle2}></div>
      
      <div style={styles.mainCard}>
        {/* Panel Izquierdo */}
        <div style={styles.leftPanel}>
          <div style={styles.leftPanelOverlay}></div>
          
          <div style={styles.contentWrapper}>
            <div style={styles.brandingSection}>
              <div style={styles.logoContainer}>
                <Camera style={{width: '32px', height: '32px', color: '#f5f5f4'}} />
              </div>
              <h1 style={styles.brandTitle}>TGOFILMS</h1>
            </div>
            
            <div style={styles.heroSection}>
              <h2 style={styles.heroTitle}>
                Creamos experiencias audiovisuales únicas
              </h2>
              <p style={styles.heroDescription}>
                Únete a nuestra plataforma y accede a herramientas profesionales para proyectos audiovisuales de alta calidad.
              </p>
              
              <div style={styles.iconContainer}>
                <div style={styles.iconBox}>
                  <Film style={{width: '24px', height: '24px', color: '#f5f5f4'}} />
                </div>
                <div style={styles.iconBox}>
                  <Mic style={{width: '24px', height: '24px', color: '#f5f5f4'}} />
                </div>
                <div style={styles.iconBox}>
                  <Camera style={{width: '24px', height: '24px', color: '#f5f5f4'}} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Derecho */}
        <div style={styles.rightPanel}>
          <div style={styles.formContainer}>
            <div style={styles.headerSection}>
              <h3 style={styles.formTitle}>
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </h3>
              <p style={styles.formSubtitle}>
                {isLogin ? 'Accede a tu cuenta profesional' : 'Únete a nuestra comunidad audiovisual'}
              </p>
            </div>

            <div style={styles.formFields}>
              {!isLogin && (
                <div style={styles.fieldGroup}>
                  <label style={styles.fieldLabel}>Nombre completo</label>
                  <div style={styles.inputWrapper}>
                    <User style={styles.inputIcon} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={styles.inputField}
                      placeholder="Tu nombre completo"
                      onFocus={(e) => {e.target.style.background = '#ffffff'; e.target.style.borderColor = '#111827'}}
                      onBlur={(e) => {e.target.style.background = '#f5f5f4'; e.target.style.borderColor = '#d1d5db'}}
                    />
                  </div>
                </div>
              )}

              <div style={styles.fieldGroup}>
                <label style={styles.fieldLabel}>Correo electrónico</label>
                <div style={styles.inputWrapper}>
                  <Mail style={styles.inputIcon} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.inputField}
                    placeholder="tu@email.com"
                    onFocus={(e) => {e.target.style.background = '#ffffff'; e.target.style.borderColor = '#111827'}}
                    onBlur={(e) => {e.target.style.background = '#f5f5f4'; e.target.style.borderColor = '#d1d5db'}}
                  />
                </div>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.fieldLabel}>Contraseña</label>
                <div style={styles.inputWrapper}>
                  <Lock style={styles.inputIcon} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{...styles.inputField, paddingRight: '48px'}}
                    placeholder="••••••••"
                    onFocus={(e) => {e.target.style.background = '#ffffff'; e.target.style.borderColor = '#111827'}}
                    onBlur={(e) => {e.target.style.background = '#f5f5f4'; e.target.style.borderColor = '#d1d5db'}}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={styles.passwordToggle}
                    onMouseEnter={(e) => e.target.style.color = '#374151'}
                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div style={styles.fieldGroup}>
                  <label style={styles.fieldLabel}>Confirmar contraseña</label>
                  <div style={styles.inputWrapper}>
                    <Lock style={styles.inputIcon} />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      style={styles.inputField}
                      placeholder="••••••••"
                      onFocus={(e) => {e.target.style.background = '#ffffff'; e.target.style.borderColor = '#111827'}}
                      onBlur={(e) => {e.target.style.background = '#f5f5f4'; e.target.style.borderColor = '#d1d5db'}}
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div style={styles.rememberSection}>
                  <div style={styles.checkboxWrapper}>
                    <input
                      id="remember-me"
                      type="checkbox"
                      style={styles.checkbox}
                    />
                    <label htmlFor="remember-me" style={styles.checkboxLabel}>
                      Recordarme
                    </label>
                  </div>
                  <button
                    type="button"
                    style={styles.forgotPassword}
                    onMouseEnter={(e) => e.target.style.color = '#374151'}
                    onMouseLeave={(e) => e.target.style.color = '#111827'}
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                style={styles.submitButton}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #000000, #374151)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #111827, #000000)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </button>

              <div style={styles.toggleSection}>
                <p style={styles.toggleText}>
                  {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                  <button
                    type="button"
                    onClick={toggleMode}
                    style={styles.toggleButton}
                    onMouseEnter={(e) => e.target.style.color = '#374151'}
                    onMouseLeave={(e) => e.target.style.color = '#111827'}
                  >
                    {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
                  </button>
                </p>
              </div>
            </div>

            <div style={styles.footer}>
              <p style={styles.footerText}>Al continuar, aceptas nuestros</p>
              <div style={styles.footerLinks}>
                <button 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#374151'}
                  onMouseLeave={(e) => e.target.style.color = '#111827'}
                >
                  Términos de Servicio
                </button>
                <span style={{color: '#9ca3af'}}>y</span>
                <button 
                  style={styles.footerLink}
                  onMouseEnter={(e) => e.target.style.color = '#374151'}
                  onMouseLeave={(e) => e.target.style.color = '#111827'}
                >
                  Política de Privacidad
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSystem;