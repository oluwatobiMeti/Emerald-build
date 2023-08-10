import react from "react";
import TeamCard from "./TeamCard";
import classes from "./TeamDisplayArea.module.css"
import { LeaguesData } from "./LeaguesData";


const TeamDisplayArea = () => {
    return(
        <div className={classes.team_display_area}>
            {
                LeaguesData.map((league, index) => {
                    return <TeamCard 
                        team_image={league.league_image}
                        team_name={league.league_name}
                        team_members={league.total_teams}
                        players_count="180+"
                        year_created={league.year_created}
                        stadium_count={league.stadiums_count}
                    />                    
                })
            }
        </div>
    );
}

export default TeamDisplayArea;