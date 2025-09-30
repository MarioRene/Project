// Gallery.jsx
import React, { useState } from 'react';
import { images } from './images';
import { styles } from './styles';

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const galleryImages = [
    { src: images.camera, alt: 'Camera Equipment' },
    { src: images.production, alt: 'Video Production' },
    { src: images.equipment, alt: 'Professional Equipment' }
  ];

  return (
    <div style={styles.galleryContainer}>
      <div style={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.galleryItem,
              ...(hoveredItem === index ? styles.galleryItemHover : {})
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
