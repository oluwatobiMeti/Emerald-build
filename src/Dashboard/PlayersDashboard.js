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
        inputText: "",
        searchResult: []
    }

    inputTextChangeHandler = (e) => {
        this.setState({inputText: e.target.value});
    }

    searchPlayersHandler = () => {
        // const result = [];
        // const inputText = this.state.inputText;
        // allPlayersData.forEach((player) => {
        //     if (player.name.toString().toLowerCase().includes(inputText.toLocaleLowerCase())) {
        //         console.log(player);
        //         result.push(player);
        //         this.setState({searchResult: result});
        //     }
        // })
        const inputText = this.state.inputText.trim().toLowerCase();
        const result = allPlayersData.filter(player => player.name.toLowerCase().includes(inputText));
        this.setState({ searchResult: result });
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

                      { this.state.searchResult.length < 1 ?
                          allPlayersData.map((player, index) => {
                              return <PlayerCard 
                                  player_name={player.name}
                                  player_description={player.biography}
                                  player_club={player.club}
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
