import React, { useState } from 'react'
<<<<<<< HEAD
// import Player from './Player';
// import Matches from './Matches';
// import LeagueTable from './LeagueTable';

function CategoriesDetails({show}) {
  return (
    <></>
    // <div>
    //   {(show === "Leagues")? <LeagueTable/>:(show === "Matches")? <Matches/>:(show === "Player")?<Player/>:<LeagueTable/>}
    // </div>
  );
=======
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
>>>>>>> bf85beb89f681c732228ee8387a6c9870e279ee5
}

export default CategoriesDetails
