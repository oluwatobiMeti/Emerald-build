import react from "react";
import classes from "./TeamCard.module.css";

const TeamCard = (props) => {
    return(
        <div className={classes.team_card}>
            <div className={classes.league_card_image_area}>
                <img src={props.team_image} className={classes.team_card_img} />
            </div>
            <div className={classes.league_card_content_area}>
                <h3>{props.team_name}</h3>
                <ul>
                    <li>
                        <ion-icon name="checkmark-done-outline"></ion-icon>
                        <p>{props.team_members} Teams</p>
                    </li>
                    <li>
                        <ion-icon name="checkmark-done-outline"></ion-icon>
                        <p>{props.players_count} Players</p>
                    </li>
                    <li>
                        <ion-icon name="checkmark-done-outline"></ion-icon>
                        <p>{props.stadium_count} Stadiums</p>
                    </li>
                </ul>
                <button className={classes.league_action_btn}>View League</button>
            </div>
        </div>
    );
}

export default TeamCard;