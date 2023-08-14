import {premier} from "./premierLeague"
import { france } from "./france";
import { LaLiGa } from "./La-Liga";
import {german} from "./german"
import {champions} from "./champion";

const Leagu = ["premier League", "German League", "La Lilg", "league 1","Serie A"];
function LeagueTable({show, League}) {
   let Leagues;
    (League === Leagu[0])? Leagues = premier: (League === Leagu[3])? Leagues = france: (League === Leagu[2])? Leagues = LaLiGa: (League === Leagu[1])? Leagues = german: (League === Leagu[4])? Leagues = champions:Leagues = premier;

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
  {Leagues.map(Clubs => <tr>
    <td>{Clubs.name}</td>
    <td>{Clubs.wins}</td>
    <td>{Clubs.draws}</td>
    <td>{Clubs.losses}</td>
    <td>{Clubs.total_goals_scored}</td>
  </tr>)}
</table>
    </div>
  )
}

export default LeagueTable;
