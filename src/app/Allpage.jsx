import React from 'react'
import Navbar from './Components/Navber'
import AboutMe from './Components/About'
import Services from './Components/Services'
import SelectedWorks from './Components/Works'
import Testimonials from './Components/Testimonials'
import Clients from './Components/Clients'
import Hero from './Components/Hero'
import Faq from './Components/Faq'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const Allpage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Services />
      <SelectedWorks />
      <Testimonials/>
      <Clients />
      <Faq/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Allpage
