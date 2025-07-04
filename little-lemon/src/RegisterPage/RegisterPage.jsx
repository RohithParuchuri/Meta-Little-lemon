import React from 'react';
import styles from './RegisterPage.module.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginContainer}>
        <button className={styles.homeIcon} onClick={() => navigate('/')}
          aria-label="Home">
          <img src="/assets/arrow_back.svg" alt="Home" />
        </button>
        <h1 className={styles.heading}>Register</h1>
        <input type="text" placeholder="Username" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <input type="password" placeholder="Re-enter Password" className={styles.inputField} />

        <button className={styles.button}>Register</button>
        <a href="/login" className={styles.registerLink}>Alreadyhave an account? Login</a>
      </div>
    </div>
  );
};

export default RegisterPage;