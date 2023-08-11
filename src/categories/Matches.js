import React from 'react'
import Match from './match'

function Matches() {
  return (
    <div>
      <h1>{date}</h1>
      <Match club1 = {League.matches.team1} club1Icon = {""} club2Icon = {""} club2 = {League.matches.team2} goal1 = {League.matches.score.ft[0]} goal2 = {League.matches.score.ft[0]}/>
    </div>

  )
}

export default Matches
