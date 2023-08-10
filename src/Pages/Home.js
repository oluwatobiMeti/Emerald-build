import React from 'react'
import Nav from '../component/Nav'
import Leagues from '../sections/Leagues';
import Hero from '../component/Hero';
import Footer from '../sections/Footer';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Nav/>
      <Link to="Contact"/>
      <Hero/>
      <Leagues />
      <Footer/>
    </div>
  )
}

export default Home
