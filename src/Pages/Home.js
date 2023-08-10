import React from 'react'
import Nav from '../component/Nav'
import Leagues from '../sections/Leagues';
import Hero from '../component/Hero';
import Footer from '../sections/Footer';
import { Link } from 'react-router-dom';
import WhatWeDo from '../sections/WhatWeDo';
import Testimonial from '../sections/Testimonial';


function Home() {
  return (
    <div>
      <Nav/>
      <Link to="Contact"/>
      <Hero/>
      <WhatWeDo />
      <Leagues />
      <Testimonial />
      <Footer/>
    </div>
  )
}

export default Home
