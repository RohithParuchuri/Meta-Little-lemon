import React, { useState } from 'react'
import styles from './Card.module.css';

const Card = ({heading, desc, price, onPeopleLimit }) => {
    var [btnState, setBtnState] = useState(0);

    const handleIncrement = () => {
        if (btnState + 1 > 4) {
            if (onPeopleLimit) onPeopleLimit();
            return;
        }
        setBtnState(s => s + 1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={`/assets/${heading}Mini.jpg`} alt={`${heading} Image`} />
            </div>
            <hr className={styles.hr} />
            <p className={styles.heading}>{heading}</p>
            <p className={styles.para}>{desc}</p>
            <p className={styles.price}><bold>Price:</bold> $ {btnState == 0 ? price : price * btnState}</p>
            {btnState == 0 ? (
                <button className={styles.btn} onClick={handleIncrement}> Add to Cart</button>
            ) : (
                <div className={styles.quantityContainer}>
                    <button className={styles.quantityBtn} onClick={() => { setBtnState(s => s - 1) }}>-</button>
                    <input
                        className={styles.quantityInput}
                        type="text"
                        value={btnState}
                        readOnly
                    />
                    <button className={styles.quantityBtn} onClick={handleIncrement}>+</button>
                </div>
            )}

        </div>
    )
}

export default Card