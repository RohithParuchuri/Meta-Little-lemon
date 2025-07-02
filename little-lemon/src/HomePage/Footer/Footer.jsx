import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img 
          src="/assets/logo.jpg" 
          alt="Logo" 
          className={styles.logo} 
        />
        <ul className={styles.navList}>
          <li>
            <a href="#" className={styles.navLink}>About Us</a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>License</a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>Contribute</a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>Contact Us</a>
          </li>
        </ul>
      </div>
      <hr className={styles.divider} />
      <p className={styles.copyright}>© 2025 Little Lemon</p>
    </footer>
  );
}