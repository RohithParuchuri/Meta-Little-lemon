import React from 'react'
import styles from './NavigationBar.module.css'

const CoreNav = () => {
    return (
        <div className={styles.innerContainer}>
            <button className={styles.btn}>
                <img className={styles.imgLeft} src='/assets/LemonOnly.png' alt='' />
            </button>

            <div className={styles.center}>
                <p>Home</p>
                <p>Menu</p>
                <p>Order</p>
                <p>Booking</p>
            </div>

            <button className={styles.btn}>
                <img className={styles.imgRight} src='/assets/account_circle.svg' alt='' />
            </button>

        </div>)
}

export default CoreNav