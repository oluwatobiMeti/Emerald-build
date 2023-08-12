import React from 'react';
import DashboardNav from './DashboardNav';
import classes from "./PlayersDashboard.module.css";
import img from "../images/players/lewandoski.jpg";
import { allPlayersData } from '../PLAYER INFORMATION JSON/League 1/all';
import { PureComponent } from 'react';

const PlayerCard = (props) => {
    return(
        <div className={classes.player_card_container}>
            <div className={classes.player_card_image_wrapper}>
                <img src={props.player_pic} alt='' className={classes.card_image} />
            </div>
            <div className={classes.player_card_content_wrapper}>
                <h3 className={classes.player_card_header}>{props.player_name}</h3>
                <p className={classes.player_card_text}>{props.player_description}</p>
                <p className={classes.stat_text}>Total Assist: {props.goalsScored}</p>
                <p className={classes.stat_text}>Goals Scored: {props.assists}</p>
                <p className={classes.stat_text}>Club: {props.player_club}</p>
            </div>
        </div>
    );
}

class PlayersDashboard extends PureComponent{
    state = {
        inputText: "",
        searchResult: [],
        sortCriteria: "name"
    }

    inputTextChangeHandler = (e) => {
        this.setState({inputText: e.target.value});
        this.searchPlayersHandler();
    }

    searchPlayersHandler = () => {
        const inputText = this.state.inputText.trim().toLowerCase();
        if (this.state.sortCriteria == "name") {
            const result = allPlayersData.filter(player => player.name.toLowerCase().includes(inputText));
            this.setState({ searchResult: result });  
        }else if(this.state.sortCriteria == "club"){
            const result = allPlayersData.filter(player => player.club.toLowerCase().includes(inputText));
            this.setState({ searchResult: result });            
        }else if(this.state.sortCriteria == "goals"){
            const result = allPlayersData.filter(player => player.performance[0].goalsScored >= inputText);
            this.setState({ searchResult: result });      
        }
    }

    sortCriteriaChangeHandler = (e) => {
        this.setState({sortCriteria: e.target.value});
        this.searchPlayersHandler();
    }

    render(){
        return (
          <div>
            <DashboardNav/>
      
            <div className={classes.player_card_search_area}>
                  <div className={classes.search_input_wrapper}>
                    <select className={classes.player_card_options} onChange={this.sortCriteriaChangeHandler}>
                        <option>Sort by</option>
                        <option value="name">Name</option>
                        <option value="club">Club</option>
                        <option value="goals">Goals Scored</option>
                    </select>
                      <input type='text' placeholder='Search here' value={this.state.inputText} onChange={this.inputTextChangeHandler} onInput={this.searchPlayersHandler} className={classes.search_input} />
                </div>
                  <div className={classes.player_card_wrapper}>

                      { this.state.searchResult.length < 1 ?
                          allPlayersData.map((player, index) => {
                              return <PlayerCard 
                                  player_name={player.name}
                                  player_description={player.biography}
                                  player_club={player.club}
                                  player_pic={player.player_pic}
                                  goalsScored={player.performance[0].goalsScored}
                                  assists={player.performance[0].assists}
                              />
                          })
                        : null
                      }
                      { this.state.searchResult.length > 1 ?
                          this.state.searchResult.map((player, index) => {
                              return <PlayerCard 
                                  player_name={player.name}
                                  player_description={player.biography}
                                  player_club={player.club}
                                  player_pic={player.player_pic}
                                  goalsScored={player.performance[0].goalsScored}
                                  assists={player.performance[0].assists}
                              />
                          })
                        : null
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
