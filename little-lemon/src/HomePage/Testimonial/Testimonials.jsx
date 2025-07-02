import React, { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sophia R.',
    text: 'The food was absolutely incredible! Easily the best Mediterranean meal I’ve had in years.',
  },
  {
    name: 'Liam J.',
    text: 'Little Lemon never disappoints. Cozy atmosphere and unforgettable flavors!',
  },
  {
    name: 'Isabella T.',
    text: 'Friendly staff, fresh ingredients, and a charming vibe. Highly recommended!',
  },
  {
    name: 'Ethan W.',
    text: 'Their grilled fish and lemon risotto changed my life. Five stars!',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.testimonialSection}>
      <h2>Testimonials</h2>
      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={prev}><img src={'/assets/arrow_back.svg'}></img></button>
        <div className={styles.card}>
          <div className={styles.avatar}></div>
          <div className={styles.text}>
            <p><strong>{testimonials[index].name}</strong></p>
            <p>{testimonials[index].text}</p>
          </div>
        </div>
        <button className={styles.arrow} onClick={next}><img src={'/assets/arrow_forward.svg'}></img></button>
      </div>
    </div>
  );
};

export default Testimonials;
