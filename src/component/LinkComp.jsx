import React from 'react'
import { NavLink } from 'react-router-dom'
function LinkComp({title, className, to}) {
  return (
    <NavLink to={to} className={className}>{title}</NavLink>
  )
}

export default LinkComp;
