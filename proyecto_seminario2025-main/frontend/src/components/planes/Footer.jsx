// Footer.jsx
import React from 'react';
import { styles } from './styles';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.footerContent}>
        <div>
          <div style={styles.phoneNumber}>000-000-0000</div>
        </div>
        <div style={styles.contactInfo}>
          <div>xxxx@gmail.com</div>
          <div>www.xxxxx.com</div>
        </div>
        <div style={styles.contactInfo}>
          <div>xxxx.com/name</div>
          <div>xxxx.com/name</div>
        </div>
        <div style={styles.contactInfo}>
          <div>San Lucas Sacatepequez, Guatemala</div>
          <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

