import React from 'react'
import LinkComp from './LinkComp';
import Button from './Button';
import ButtonLink from './ButtonLink';
function NavContainer({className}) {
  return (
    <div className={`${(className === "nav__container")?"nav__container":"mobile__nav"}`}>
       <LinkComp to="/" title="Home"/>
       <LinkComp to="/About" title="Contact us"/>
       <LinkComp to="/Categories" title="Categories"/>
       <ButtonLink className="hero__btn" title="Explore"/>
    </div>
  )
}

export default NavContainer
