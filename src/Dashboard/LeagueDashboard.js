import react from "react";
import classes from "./LeagueDashboard.module.css"
import LeagueSidebar from "./LeaguesSidebar";
import TeamDisplayArea from "./Teams/TeamDisplayArea";
import DashboardNav from "./DashboardNav";

const LeagueDashboard = () => {
    return(
        <section className={classes.league_dashboard_page}>
            <DashboardNav />
            <div className={classes.league_dashboard_area}>
                <LeagueSidebar ></LeagueSidebar>
                <TeamDisplayArea/>
            </div>
        </section>
    );
}

export default LeagueDashboard;