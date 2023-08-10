import react from "react";
import classes from "./LeagueSidebar.module.css";

const LeagueSidebar = ({children}) => {
    return(
        <div className={classes.league_sidebar}>
            {children}
            <ul>
                <h3>Leagues</h3>
                <li>Premier League</li>
                <li>Laliga (Spanish League)</li>
                <li>Serie A (Italian League)</li>
                <li>Bundlesiga (German League)</li>
                <li>Champions League</li>

                {/* <h3>Players</h3> */}
            </ul>
        </div>
    );
}

export default LeagueSidebar;