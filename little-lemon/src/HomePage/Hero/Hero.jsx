import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.left}>
        <h1>Little Lemon</h1>
        <p className={styles.location}>Chicago</p>
        <p className={styles.description}>
          Little Lemon is a family-owned Mediterranean restaurant based in Chicago, serving fresh, authentic dishes inspired by traditional recipes. Our passion lies in delivering vibrant flavors, warm hospitality, and a modern twist on classic cuisine.
        </p>
        <button className={styles.cta} onClick={() => window.location.href = '/reserve'}>Reserve a table</button>
      </div>
      <div className={styles.right}>
        <img className={styles.image} src={"/assets/BrushettaMini.jpg"} alt="Dish" />
      </div>
    </div>
  );
};

export default Hero;
