import React from 'react'
import LinkComp from './LinkComp';
import Button from './Button';
function NavContainer({className}) {
  return (
    <div className={`${(className === "nav__container")?"nav__container":"mobile__nav"}`}>
       <LinkComp title="Home"/>
       <LinkComp title="About"/>
       <LinkComp title="Contact Us"/>
       <Button title="Explore"/>
    </div>
  )
}

export default NavContainer
