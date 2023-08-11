import react from "react";
import classes from "./LeagueSidebar.module.css";
import { reduxWrapper } from "../Store";
import { userActions } from "../Store";
import WithRouter from "../HOC/WithRouter";

const LeagueSidebar = ({children}) => {
    return(
        <div className={classes.league_sidebar}>
            {children}
            <ul>
                <h3>Leagues</h3>
                <li onClick={() => { 
                    // children.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 0}));
                    // this.props.router.navigate('/clubDashboard');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Premier League</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Laliga (Spain)</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Serie A (Italy)</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Bundlesiga (Germany)</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Champions League</p>
                </li>

                {/* <h3>Players</h3> */}
            </ul>
            <ul>
                <h3 className={classes.other_features_header}>Other Features</h3>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Player Search</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>League Data</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Match Results</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Game Fixtures</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Player Search</p>
                </li>
            </ul>
        </div>
    );
}

export default WithRouter(reduxWrapper(LeagueSidebar));