import React from "react";
import classes from "./Clubs.module.css";
import { AllLeaguesTeams } from "../../Data/AllLeagueTeams";
import placeholder from "../../images/leagues/prem-image.jpg";
import WithRouter from "../../HOC/WithRouter";
import { getAppState, reduxWrapper } from "../../Store";
import { PureComponent } from "react";

const ClubCard = (props) => {
    return(
        <div className={classes.club_card}>
            <div className={classes.club_card_image_area}>
                <img src={props.club_flag} alt="" className={classes.club_flag} />
            </div>
            <div className={classes.club_card_text_area}>
                <h3>{props.club_name}</h3>
                <p>{props.club_description}</p>
            </div>
        </div>
    );
}

class Clubs extends PureComponent {
    render(){
        console.log(this.props.redux.user.currentLeagueIndex);
        console.log(this.props);
        return(
            <div className={classes.club_cards_wrapper}>
                {
                    AllLeaguesTeams[this.props.redux.user.currentLeagueIndex].map((club, index) => {
                        return <ClubCard 
                            club_flag={placeholder}
                            club_name={club.name}
                            club_description={club.overview}
                        />
                    })
                }            
            </div>
        );
    }
}

export default WithRouter(reduxWrapper(Clubs));