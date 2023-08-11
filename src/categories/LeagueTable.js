
function LeagueTable({}) {

import Laliga from "./Laliga.json"
import Premier from "./premierLeague.json";
import Germer from "./GermerLeague.json"
function LeagueTable(show) {
  let {Leagues} = Laliga;

  return (
    
    <div>
      
      <table>
  <tr>
    <th>CLUB</th>
    <th>W</th>
    <th>D</th>
    <th>L</th>
    <th>GA</th>
  </tr>
  <tr>
    {Leagues.map((club) => <td>{club.name}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.wins}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.draws}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.losses}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.total_goals_scored}</td>)}
  </tr>
</table>
    </div>
  )
}

export default LeagueTable;
