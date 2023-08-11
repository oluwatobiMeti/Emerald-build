import React from 'react'

function CategoriesNav({Leagues}) {
  return (
    <div>
      <select name="Leagues" id="Leagues">
             {Leagues.map((League) =>  <option value={League.name}>{League.name}</option>)}
       </select>
       <input className='' type='text'/>
    </div>
  )
}

export default CategoriesNav
