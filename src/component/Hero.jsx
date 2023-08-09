import React from 'react'
import img from "../images/8-83928_soccer-united-athlete-bedworth-football-f-soccer-ball.png"

function Hero() {
  return (
    <div className='hero'>
      <div className="hero__content">
        <h1 className='hero__header'>JOIN THE ELITE!</h1>
        <p className='hero__subheader'>
           Introducing Soccerverse.  A multiplayer, community-driven football management.
        </p>
        <img src={img} alt="a man playing soccer ball"/>
      </div>
      
    </div>
  )
}

export default Hero
