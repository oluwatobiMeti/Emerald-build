import React, {useState} from 'react'
import LeagueSidebar from "../Dashboard/LeaguesSidebar";
import CategoriesDetails from './CategoriesDetails';
import CategoriesNav from './CategoriesNav';
function Categories({className}) {
  const [show, setShow] = useState("Leagues");
  return (
    <div className={className}>

      <CategoriesNav/>
    <div>
         <CategoriesDetails/>
     </div>

      <div className="main">
      <div>
      <ul>
        <li onClick={() => setShow("Leagues")} className="categories__list">Leagues</li>
        <li onClick={() => setShow("Matches")} className='categories__list'>Matches</li>
        <li onClick={() => setShow("Player")} className="categories__list">Player</li>
      </ul>
      </div>
      <CategoriesDetails/>
      </div>
    </div>
  )
}

export default Categories
