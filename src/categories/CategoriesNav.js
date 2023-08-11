import React from 'react'
// import League from '../PLAYER INFORMATION JSON/'

function CategoriesNav() {
    const Leagues = ["German League", "La Lilg", "league 1", "premier League", "Serie A"]
  return (
    <div>
      <select name="League" id="League">{
        Leagues.map((League) => 
         <option value={League}>{League}</option>)
      }
       </select>
    </div>
  )
}

export default CategoriesNav
