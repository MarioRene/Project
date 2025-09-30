// Quality.jsx
import React from 'react';
import { images } from './images';
import { styles } from './styles';

const Quality = () => {
  return (
    <div style={styles.qualitySection}>
      <div style={styles.qualityContent}>
        <div>
          <h2 style={styles.qualityTitle}>lalalal</h2>
          <p style={styles.qualityText}>
            lslslslsls
          </p>
          <p style={styles.qualityText}>
            Laoreet dolore magna aliquam erat volutpat ut adipiscing elit, sed diam nibh euismod adipiscing elit sed diam nibh 
            elslsllss
          </p>
        </div>
        <div>
          <img
            src={images.studio}
            alt="Professional Studio"
            style={{
              width: '100%',
              borderRadius: '10px',
              border: '3px solid #ff4444'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Quality;