import React from 'react'
import LeagueCard from "../component/LeagueCard";
import classes from "./Leagues.module.css";
import premier_league_img from "../images/leagues/prem-image.jpg";
import Bundlesiga from "../images/leagues/bund-logo.jpg";
import laliga from "../images/leagues/laliga-img.webp";
import league_1 from "../images/leagues/league 1.webp";
import serie_a from "../images/leagues/serie a.png";
import champ_league_img from "../images/leagues/champions-laguee.webp";

function Leagues() {
  return (
    <div className={classes.card_display_area}>
        <h3 className={classes.leagues_header}>Featured Leagues</h3>
        <div className={classes.league_cards_wrapper}>
            <LeagueCard league_name="Premier League" league_image={premier_league_img} />
            <LeagueCard league_name="Bundlesiga" league_image={Bundlesiga} />
            <LeagueCard league_name="Laliga" league_image={laliga} />
            <LeagueCard league_name="Serie A" league_image={serie_a} />
            <LeagueCard league_name="League 1" league_image={league_1} />    
            <LeagueCard league_name="Champions League" league_image={champ_league_img} />
        </div>
    </div>
  )
}

export default Leagues;