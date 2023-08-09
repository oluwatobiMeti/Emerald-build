import React from 'react'

function Button({title, className}) {
  return (
    <button className={className}>{title}</button>
  )
}

export default Button
