import React from 'react'
import LeagueSidebar from "../Dashboard/LeaguesSidebar";
import CategoriesDetails from './CategoriesDetails';
function Categories({className}) {
  const [show, setShow] = useState("Leagues");
  return (
    <div className={className}>

      <div className="main">
      <LeagueSidebar>
      <ul>
        <li onClick={() => setShow("Leagues")} className="categories__list">Leagues</li>
        <li onClick={() => setShow("Matches")} className='categories__list'>Matches</li>
        <li onClick={() => setShow("Player")} className="categories__list">Player</li>
      </ul>
      </LeagueSidebar>
      <CategoriesDetails/>
      </div>
    </div>
  )
}

export default Categories
