import React from 'react'
import img from "../images/hero1.png"
import "./hero.css";
import ButtonLink from './ButtonLink';

function Hero() {
  return (
    <div className='hero'>
      <div className="hero__content">
        <h1 className='hero__header'>JOIN THE ELITE!</h1>
        <p className='hero__subheader'>
           Introducing Soccerverse.  A football management system for your Desired Leagues, Clubs and players. Access your stats and scores now!
        </p>
        <ButtonLink className="hero__btn" title="Explore"/>
      </div>
      <img className='hero__img' src={img} alt="a man playing soccer ball"/>
    </div>
  )
}

export default Hero
