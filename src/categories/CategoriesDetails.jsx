import React, { useState } from 'react'
import Player from './Player';
import Matches from './Matches';
import LeagueTable from './LeagueTable';
import CategoriesNav from './CategoriesNav';

function CategoriesDetails({show}) {
  return (
    <div>
       <CategoriesDetails/>
      {(show === "Leagues")? <LeagueTable/>:(show === "Matches")? <Matches/>:(show === "Player")?<Player/>:<LeagueTable/>}
    </div>
  )
}

export default CategoriesDetails
