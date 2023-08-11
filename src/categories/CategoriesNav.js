import React from 'react'
// import League from '../PLAYER INFORMATION JSON/'
import Button from '../component/Button';

function CategoriesNav({setShow}) {
  const Leagues = ["German League", "La Lilg", "league 1", "premier League", "Serie A"]
  return (
   
     <div style={{
      height: "2.5rem",
      width: "100%",
      fontSize: "20px",
      display: "flex"
     }}>
      <select name="League" id="League">
        {Leagues.map((League) => 
         <option onClick={() => setShow(League)} value={League}>{League}</option>)}
       </select>
       <Button className="categories_btn" title="Matches"/>
    </div>
    )
    }

export default CategoriesNav;