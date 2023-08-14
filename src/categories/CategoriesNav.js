import React from 'react'
// import League from '../PLAYER INFORMATION JSON/'
import Button from '../component/Button';

function CategoriesNav({setShow, setLeague}) {
  const Leagues = ["premier League", "German League", "La Lilg", "league 1","Serie A"];
  return (
   
     <div className='categories__nav'>
      <select onChange={(e) => {
        setShow("Leagues");
        setLeague(e.target.value);
      }} name="League" id="League">
        {Leagues.map((League) => 
         <option value={League}>{League}</option>)}
       </select>
       <Button onClick={() => setShow("Matches")} className="categories_btn" title="Matches"/>
    </div>
    )
    }

export default CategoriesNav;