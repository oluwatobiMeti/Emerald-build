import React from 'react';
import DashboardNav from './DashboardNav';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import classes from "./PlayersDashboard.module.css";
import img from "../images/players/lewandoski.jpg";
import { allPlayersData } from '../PLAYER INFORMATION JSON/League 1/all';
import { PureComponent } from 'react';

const PlayerCard = (props) => {
    return(
        <div className={classes.player_card_container}>
            <div className={classes.player_card_image_wrapper}>
                <img src={img} alt='' className={classes.card_image} />
            </div>
            <div className={classes.player_card_content_wrapper}>
                <h3 className={classes.player_card_header}>{props.player_name}</h3>
                <p className={classes.player_card_text}>{props.player_description}</p>
                <p>Club: {props.player_club}</p>
            </div>
        </div>
    );
}

class PlayersDashboard extends PureComponent{
    state = {
        inputText: ""
    }

    inputTextChangeHandler = (e) => {
        this.setState({inputText: e.target.value});
    }

    searchPlayersHandler = () => {
        const searchResults = allPlayersData.filter(player => {
            const playerName = player.name.toLowerCase();
            return playerName.includes((this.state.inputText).toLowerCase());
          });
        
          console.log(this.state.inputText);
          return searchResults;
          console.log(searchResults);
    }

    render(){
        return (
          <div>
            <DashboardNav/>
      
            <div className={classes.player_card_search_area}>
                  <div className={classes.search_input_wrapper}>
                      <input type='text' placeholder='Search here' onInput={this.searchPlayersHandler} value={this.state.inputText} onChange={this.inputTextChangeHandler} className={classes.search_input} />
                  </div>
                  <div className={classes.player_card_wrapper}>
                      {
                          allPlayersData.map((player, index) => {
                              return <PlayerCard 
                                  player_name={player.name}
                                  player_description={player.biography}
                                  player_club={player.club}
                              />
                          })
                      }
                      {/* <PlayerCard />
                      <PlayerCard />
                      <PlayerCard /> */}
                  </div>
            </div>
          </div>
        )
    }
}

export default PlayersDashboard;
