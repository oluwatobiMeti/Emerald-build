import React from 'react';
// import German from "../PLAYER INFORMATION JSON/German League/all.json";
import LaLiga from "../PLAYER INFORMATION JSON/La Liga/all.json";
// import League1 from "../PLAYER INFORMATION JSON/League 1/all.json";
// import Premier from "../PLAYER INFORMATION JSON/Premier/all.json"
// import serieA from "../PLAYER INFORMATION JSON/Serie A/all.json"


function Player() {
function Player({show}) {
  let {Leagues} = LaLiga;
  return (
    <div>
      <table>
  <tr>
    <th>NAME</th>
    <th>CLUB</th>
    <th>GOAL</th>
  </tr>
  <tr>
    {Leagues.map((players) => <th>{players.Name}</th>)}
  </tr>
  <tr>
    {Leagues.map((players) => <th>{players.CLUB}</th>)}
  </tr>
  <tr>
    {Leagues.map((players) => <th>{players.GOAL}</th>)}
  </tr>
</table>
    </div>
  )
}

export default Player;
