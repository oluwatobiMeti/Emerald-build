import react from "react";
import classes from "./LeagueDashboard.module.css"
import LeagueSidebar from "./LeaguesSidebar";
import TeamDisplayArea from "./Teams/TeamDisplayArea";
import DashboardNav from "./DashboardNav";

const LeagueDashboard = () => {
    return(
        <>
            <DashboardNav />
            <div className={classes.league_dashboard_area}>
                <LeagueSidebar />
                <TeamDisplayArea/>
            </div>
        </>
    );
}

export default LeagueDashboard;