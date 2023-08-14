import React from 'react';
import {matches} from "./matchese"
import Matchs from './Matchs';
function Matches() {
  console.log(matches.map((i) => console.log(i.score.goals[1])))
  return (
    <div>
      <h1>{matches.date}</h1>
      {matches.map((match) => 
      <Matchs club1 = {match.team1} club1Icon = {""} club2Icon = {""} club2 = {matches.team2} goal1 = {matches.score} goal2 = {matches.score}/>
      )}
    </div>

  )
}

export default Matches
