import react from "react";
import classes from "./TeamCard.module.css";
import { reduxWrapper } from "../../Store";
import { userActions } from "../../Store";
import { PureComponent } from "react";
import WithRouter from "../../HOC/WithRouter" ;

class TeamCard extends PureComponent {
    
    setCurrentLeagueIndex = () => {
        try {
            console.log(this.props.league_index);
            this.props.dispatch(userActions.setCurrentLeagueIndex({currentLeagueIndex: this.props.league_index}));
            console.log(this.props.redux.user);
            this.props.router.navigate('/clubDashboard');
          } catch (error) {
            console.log(error);
          }
    }

    render(){
        return(
            <div className={classes.team_card}>
                <div className={classes.league_card_image_area}>
                    <img src={this.props.team_image} className={classes.team_card_img} />
                </div>
                <div className={classes.league_card_content_area}>
                    <h3>{this.props.team_name}</h3>
                    <ul>
                        <li>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                            <p>{this.props.team_members} Teams</p>
                        </li>
                        <li>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                            <p>{this.props.players_count} Players</p>
                        </li>
                        <li>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                            <p>{this.props.stadium_count} Stadiums</p>
                        </li>
                    </ul>
                    <button className={classes.league_action_btn} onClick={this.setCurrentLeagueIndex} >View League</button>
                </div>
            </div>
        );
    }
}

export default WithRouter(reduxWrapper(TeamCard));