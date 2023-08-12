import React from 'react'

function Button({title, className, onClick}) {
  return (
    <button onClick={onClick} className={className}>{title}</button>
  )
}

export default Button
