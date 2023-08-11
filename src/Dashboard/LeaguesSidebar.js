import react from "react";
import classes from "./LeagueSidebar.module.css";

const LeagueSidebar = ({children}) => {
    return(
        <div className={classes.league_sidebar}>
            {children} 
        </div>
    );
}

export default LeagueSidebar;