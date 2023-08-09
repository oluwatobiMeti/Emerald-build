import React from 'react'
import LeagueCard from "../component/LeagueCard";
import classes from "./Leagues.module.css";

function Leagues() {
  return (
    <div className={classes.card_display_area}>
        <div className={classes.league_cards_wrapper}>
            <LeagueCard league_name="Premier League"/>
            <LeagueCard league_name="Bundlesiga"/>
            <LeagueCard league_name="Laliga"/>
            <LeagueCard league_name="Serie A"/>
            <LeagueCard league_name="League 1"/>
            <LeagueCard league_name="Champions League"/>
        </div>
    </div>
  )
}

export default Leagues;