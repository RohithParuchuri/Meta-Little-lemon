import React from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginContainer}>
        <button className={styles.homeIcon} onClick={() => navigate('/')}
          aria-label="Home">
          <img src="/assets/arrow_back.svg" alt="Home" />
        </button>
        <h1 className={styles.heading}>Login</h1>
        <input type="text" placeholder="Username" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button className={styles.button}>Login</button>
        <a href="/register" className={styles.registerLink}>Don't have an account? Register</a>
      </div>
    </div>
  );
};

export default LoginPage;