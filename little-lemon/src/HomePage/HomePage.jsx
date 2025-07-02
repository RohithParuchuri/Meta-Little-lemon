import React from 'react'
import CardGroup from './Specials/CardGroup'
import NavigationBar from './Nav/navigationBar'
import Hero from './Hero/Hero'
import CoreNav from './Nav/CoreNav'
import Testimonials from './Testimonial/Testimonials'
import Footer from './Footer/Footer'

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <CoreNav />
            <Hero />
            <CardGroup />
            <Testimonials />
            <Footer />
        </>
    )
}

export default HomePage