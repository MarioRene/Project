// styles.js
export const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    minHeight: '100vh'
  },
  header: {
    background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0',
    background: 'linear-gradient(135deg, #ff4444, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '2rem',
    color: '#cccccc',
    margin: '10px 0 30px 0',
    fontWeight: '300'
  },
  description: {
    fontSize: '1.1rem',
    color: '#999999',
    maxWidth: '600px',
    margin: '0 auto',
    borderLeft: '4px solid #ff4444',
    paddingLeft: '20px',
    textAlign: 'left'
  },
  servicesContainer: {
    padding: '80px 20px',
    backgroundColor: '#222222'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  serviceCard: {
    backgroundColor: '#333333',
    padding: '30px',
    borderRadius: '10px',
    border: '2px solid #444444',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  serviceCardHover: {
    borderColor: '#ff4444',
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(255, 68, 68, 0.3)'
  },
  serviceTitle: {
    fontSize: '1.8rem',
    color: '#ffffff',
    marginBottom: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff4444',
    borderRadius: '5px',
    textAlign: 'center'
  },
  serviceList: {
    listStyle: 'none',
    padding: '0'
  },
  serviceItem: {
    padding: '8px 0',
    borderBottom: '1px solid #555555',
    color: '#cccccc',
    display: 'flex',
    alignItems: 'center'
  },
  checkmark: {
    color: '#ff4444',
    marginRight: '10px',
    fontSize: '1.2rem'
  },
  galleryContainer: {
    padding: '80px 20px',
    backgroundColor: '#1a1a1a'
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '40px auto 0'
  },
  galleryItem: {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease'
  },
  galleryItemHover: {
    transform: 'scale(1.05)'
  },
  galleryImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  qualitySection: {
    padding: '80px 20px',
    backgroundColor: '#2c2c2c'
  },
  qualityContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '40px',
    alignItems: 'center'
  },
  qualityTitle: {
    fontSize: '2.5rem',
    color: '#ffffff',
    marginBottom: '20px'
  },
  qualityText: {
    color: '#cccccc',
    lineHeight: '1.6',
    fontSize: '1.1rem'
  },
  footer: {
    backgroundColor: '#000000',
    padding: '40px 20px',
    textAlign: 'center'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px'
  },
  contactInfo: {
    color: '#cccccc'
  },
  phoneNumber: {
    fontSize: '2rem',
    color: '#ff4444',
    fontWeight: 'bold'
  }
};
