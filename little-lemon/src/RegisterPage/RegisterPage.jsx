
import React from 'react';
import styles from './RegisterPage.module.css';
import { useNavigate } from 'react-router-dom';
import CoreNav from '../HomePage/Nav/CoreNav';
import Footer from '../HomePage/Footer/Footer';


const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <CoreNav />
      <div className={styles.pageWrapper}>
        <div className={styles.registerContainer}>
          <button className={styles.homeIcon} onClick={() => navigate(-1)} aria-label="Back">
            <img src="/assets/arrow_back.svg" alt="Back" />
          </button>
          <h1 className={styles.heading}>Register</h1>
          <input type="text" placeholder="Username" className={styles.inputField} />
          <input type="email" placeholder="Email" className={styles.inputField} />
          <input type="password" placeholder="Password" className={styles.inputField} />
          <input type="password" placeholder="Confirm Password" className={styles.inputField} />
          <button className={styles.button}>Register</button>
          <a href="/login" className={styles.loginLink}>Already have an account? Login</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
