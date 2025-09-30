// Services.jsx
import React, { useState } from 'react';
import { styles } from './styles';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: 'Video',
      items: [
        'Texto',
        'Texto',
        'Texto',
        'Texto'
      ]
    },
    {
      title: 'Services',
      items: [
        'Texto',
        'Texto',
        'Texto',
        'Texto'
      ]
    },
    {
      title: 'Equipment',
      items: [
        'Texto',
        'Texto',
        'Texto',
        'Texto'
      ]
    }
  ];

  return (
    <div style={styles.servicesContainer}>
      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              ...styles.serviceCard,
              ...(hoveredCard === index ? styles.serviceCardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <ul style={styles.serviceList}>
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} style={styles.serviceItem}>
                  <span style={styles.checkmark}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;