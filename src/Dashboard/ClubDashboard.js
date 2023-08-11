import react from "react";
import classes from "./ClubDashboard.module.css";
import TeamCard from "./Teams/TeamCard";
import DashboardNav from "./DashboardNav";
import { LeaguesData } from "./Teams/LeaguesData";
import { AllLeaguesTeams } from "../Data/AllLeagueTeams";
import Clubs from "./Teams/Clubs";
import { reduxWrapper } from "../Store";
import WithRouter from "../HOC/WithRouter";


const ClubDashboard = (props) => {
    console.log(props.redux.user.currentLeagueIndex);
    return(
        <section className={classes.club_dashboard_page}>
            <DashboardNav />
            <div className={classes.club_dashboard_area}>
                <div className={classes.club_card_wrapper}>
                    <a href="#" onClick={() => {props.router.navigate("/LeagueDashboard")}} >Back to Leagues</a>
                    <TeamCard 
                        team_image={LeaguesData[props.redux.user.currentLeagueIndex].league_image}
                        team_name={LeaguesData[props.redux.user.currentLeagueIndex].league_name}
                        team_members={LeaguesData[props.redux.user.currentLeagueIndex].total_teams}
                        players_count="130+"
                        year_created={LeaguesData[props.redux.user.currentLeagueIndex].year_created}
                        stadium_count={LeaguesData[props.redux.user.currentLeagueIndex].stadiums_count}
                    />
                </div>
                <Clubs />
            </div>
        </section>
    );
}

export default WithRouter(reduxWrapper(ClubDashboard));