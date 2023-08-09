import React, { useState } from 'react';
import "./nav.css"
import {GiHamburgerMenu} from "react-icons/gi"
import NavContainer from './NavContainer';

function Nav() {
  const [show, setShow] = useState(false);
  return (
    <div className="nav__con">
    <div className='nav'>
      <span className='logo'>SoccerVerse</span>
      <NavContainer className="nav__container"/>
      <GiHamburgerMenu onClick={() => setShow(!show)} className="menu-icon"/>
    </div>
    {
      show &&
      <NavContainer className="mobile__nav"/>
      }
    </div>

  )
}

export default Nav
