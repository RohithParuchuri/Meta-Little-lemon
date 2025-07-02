import React from 'react'
import styles from './NavigationBar.module.css'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

const CoreNav = () => {
    var navigate = useNavigate()
    return (
        <div className={styles.innerContainer}>
            <button className={styles.btn} onClick={() => navigate('./')}>
                <img className={styles.imgLeft} src='/assets/LemonOnly.png' alt='' />
            </button>

            <div className={styles.center}>
                <p onClick={() => navigate('./')}>Home</p>
                <p>Menu</p>
                <p>Order</p>
                <p>Booking</p>
            </div>

            <button className={styles.btn} onClick={()=>navigate('./login')}>
                <img className={styles.imgRight} src='/assets/account_circle.svg' alt='' />
            </button>

        </div>)
}

export default CoreNav