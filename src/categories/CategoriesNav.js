import React from 'react'

function CategoriesNav() {
  const leagues = ["premier League", "League 1"];
  return (
    <div>
      <select name="league" id="league">
         {leagues.map((league) =>
          <option value={league}>{league}</option>)}
      </select>
    </div>
  )
}

export default CategoriesNav
