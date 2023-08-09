import React from 'react'
import Nav from '../component/Nav'
import Leagues from '../sections/Leagues';
import Hero from '../component/Hero';
import Footer from '../sections/Footer';


function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Leagues />
      <Footer/>
    </div>
  )
}

export default Home
