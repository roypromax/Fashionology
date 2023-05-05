import React from 'react'
import LandingPage from '../components/Home-Components/LandingPage'
import Carousel from '../components/Home-Components/Carousel'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Carousel/>
      <Footer />
    </div>
  )
}
