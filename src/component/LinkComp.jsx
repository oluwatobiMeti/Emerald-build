import React from 'react'
import { Link } from 'react-router-dom'
function LinkComp({title, className, to}) {
  return (
    <Link to={to} className={className}>{title}</Link>
  )
}

export default LinkComp;
