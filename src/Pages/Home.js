import React from 'react';
import Nav from '../component/Nav';
import Leagues from '../sections/Leagues';
import Hero from '../component/Hero';
function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Leagues />
    </div>
  )
}

export default Home
