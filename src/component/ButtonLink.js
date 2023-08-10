import React from 'react'
import LinkComp from './LinkComp'
function ButtonLink({className}) {
  return (
    <button className={`Button__link ${className}`}>
        <LinkComp to="/Dashboard" title="Explore"/>
    </button>
  )
}

export default ButtonLink
