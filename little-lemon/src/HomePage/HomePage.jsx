import React, { useRef } from 'react'
import CardGroup from './Specials/CardGroup'
import NavigationBar from './Nav/navigationBar'
import Hero from './Hero/Hero'
import CoreNav from './Nav/CoreNav'
import Testimonials from './Testimonial/Testimonials'
import Footer from './Footer/Footer'

const HomePage = () => {
    const specialsRef = useRef(null);
    return (
        <>
            <NavigationBar />
            <CoreNav specialsRef={specialsRef} />
            <Hero />
            <CardGroup ref={specialsRef} />
            <Testimonials />
            <Footer />
        </>
    )
}

export default HomePage