import react from "react";
import classes from "./LeagueSidebar.module.css";
import { reduxWrapper } from "../Store";
import { userActions } from "../Store";
import WithRouter from "../HOC/WithRouter";
import TeamPlayersGroup from "./TeamPlayersGroup";

const LeagueSidebar = (props) => {
    return(
        <div className={classes.league_sidebar}>
            {/* {children} */}
            <ul>
                <h3>Leagues</h3>
                <li onClick={() => { 
                    props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 0}));
                    props.router.navigate('/clubDashboard');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Premier League</p>
                </li>
                <li onClick={() => { 
                    props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 1}));
                    props.router.navigate('/clubDashboard');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Laliga (Spain)</p>
                </li>
                <li onClick={() => { 
                    props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 3}));
                    props.router.navigate('/clubDashboard');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Serie A (Italy)</p>
                </li>
                <li onClick={() => { 
                    props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 2}));
                    props.router.navigate('/clubDashboard');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Bundlesiga (Germany)</p>
                </li>
                <li onClick={() => { 
                    props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 4}));
                    props.router.navigate('/clubDashboard');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>League 1 (France)</p>
                </li>
            </ul>
            <ul>
                <h3 className={classes.other_features_header}>Other Features</h3>
                <li onClick={() => { 
                    props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 2}));
                    props.router.navigate('/playersDashboard');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Player Gallery</p>
                </li>
                <li onClick={() => { 
                    props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: 2}));
                    props.router.navigate('/TeamPlayersGroup');
                }}>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Club Players</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Match Results</p>
                </li>
                <li>
                    <ion-icon name="football-outline"></ion-icon>
                    <p>Game Fixtures</p>
                </li>
            </ul>
        </div>
    );
}

export default WithRouter(reduxWrapper(LeagueSidebar));