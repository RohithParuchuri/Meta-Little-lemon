import React from 'react'
import styles from './NavigationBar.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

const CoreNav = ({ specialsRef }) => {
    var navigate = useNavigate();
    const handleMenuClick = () => {
        if (specialsRef && specialsRef.current) {
            specialsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className={styles.innerContainer}>
                <button className={styles.btn} onClick={() => navigate('/')}> 
                    <img className={styles.imgLeft} src='/assets/LemonOnly.png' alt='' />
                </button>

                <div className={styles.center}>
                    <p onClick={() => navigate('/')}>Home</p>
                    <p onClick={handleMenuClick}>Menu</p>
                    <p>Order</p>
                    <p>Booking</p>
                </div>

                <button className={styles.btn} onClick={()=>navigate('/login')}>
                    <img className={styles.imgRight} src='/assets/account_circle.svg' alt='' />
                </button>
            </div>
            <div className={styles.navSpacer}></div>
        </>
    )
}

export default CoreNav