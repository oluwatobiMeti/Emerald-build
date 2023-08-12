import League1 from "./premierLeague.json";
import League2 from "./Laliga.json"
import League3 from "./GermerLeague.json"
import Clubs from "../Dashboard/Teams/Clubs";
function LeagueTable(show) {
   const {PremierLeagueClubs} =League1;
   const {LaLiga} = League2;
   const {German} = League3;
   console.log(PremierLeagueClubs)
  return (
    
    <div className="leagueTable">
      
      <table>
  <tr className="leagueTable__header">
    <th>CLUB</th>
    <th>W</th>
    <th>D</th>
    <th>L</th>
    <th>GA</th>
  </tr> 
  {PremierLeagueClubs.map(Clubs => <tr>
    <td>{Clubs.name}</td>
    <td>{Clubs.wins}</td>
    <td>{Clubs.draws}</td>
    <td>{Clubs.losses}</td>
    <td>{Clubs.totalGoalsScored}</td>
  </tr>)}
</table>
    </div>
  )
}

export default LeagueTable;
