import react from "react";
import classes from "../sections/Leagues.module.css";

const LeagueCard = (props) => {
    return(
        <div className={classes.league_card}>
            <div className={classes.league_card_imagewrapper}>
                <img src={props.league_image} alt="" className={classes.league_card_img} />
            </div>
            <div className={classes.league_card_content_wrapper}>
                <h3>{props.league_name}</h3>
                <div className={classes.league_details_list}>
                    <ul>
                        <li> 
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                            <p>League Table</p>
                        </li>
                        <li>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                            <p>Players Details</p>
                        </li>
                        <li>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                            <p>League Statistics</p> 
                        </li>
                        <li>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                            <p>League Statistics</p>
                        </li>
                    </ul>
                    <a href="#">View league now</a>
                </div>
            </div>
        </div>
    )
}

export default LeagueCard;