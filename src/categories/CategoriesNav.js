import React from 'react'
// import League from '../PLAYER INFORMATION JSON/'

function CategoriesNav() {
<<<<<<< HEAD
  const leagues = ["premier League", "League 1"];
  return (
    <div>
      <select name="league" id="league">
         {leagues.map((league) =>
          <option value={league}>{league}</option>)}
      </select>
=======
    const Leagues = ["German League", "La Lilg", "league 1", "premier League", "Serie A"]
  return (
    <div>
      <select name="League" id="League">{
        Leagues.map((League) => 
         <option value={League}>{League}</option>)
      }
       </select>
>>>>>>> bf85beb89f681c732228ee8387a6c9870e279ee5
    </div>
  )
}

export default CategoriesNav
