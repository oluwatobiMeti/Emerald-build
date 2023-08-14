import React, { useState } from 'react';
import DashboardNav from "../Dashboard/DashboardNav";
import classes from "./TeamPlayersGroup.module.css";


const PlayerDisplayCard = ({user_name}) => {
  
  return(
    <div className={classes.player_card}>
      <idv>
        <h3 className={classes.user_name}>{user_name}</h3>
      </idv>
    </div>
  );
}

const TeamPlayersGroup = () => {
  const [show, setShow] = useState("Arsenal")
  return (
    <div>
      <DashboardNav />
      <div className={classes.team_players_display_area}>
        <div className={classes.team_display_box}>
          <ul>
            <li onClick={setShow("Arsenal")}>Arsenal</li> 
            <li onClick={setShow("Chelsea")}>Chelsea</li>
            <li onClick={setShow("Liverpool")}>Liverpool</li>
            <li onClick={setShow("Manchester City")}>Manchester City</li>
            <li onClick={setShow("Manchester United")}>Manchester United</li>
          </ul>
        </div>

        <div className={classes.player_display_card_wrapper}>
             
        </div>

      </div>
    </div>
  )
}

export default TeamPlayersGroup;