import React from 'react'
import LinkComp from './LinkComp';
import Button from './Button';
function NavContainer({className}) {
  return (
    <div className={`${(className === "nav__container")?"nav__container":"mobile__nav"}`}>
       <LinkComp to="/" title="Home"/>
       <LinkComp to="/About" title="About"/>
       <LinkComp to="/Contact" title="Contact Us"/>
       <Button title="Explore"/>
    </div>
  )
}

export default NavContainer
