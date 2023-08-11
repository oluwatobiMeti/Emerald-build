function LeagueTable({}) {
  return (
    <div>
      <table>
  <tr>
    <th>CLUB</th>
    <th>PL</th>
    <th>W</th>
    <th>D</th>
    <th>L</th>
    <th>GF</th>
    <th>GA</th>
    <th>GD</th>
    <th>PTS</th>
    <th>FORM</th>
  </tr>
  <tr>
    {Leagues.map((club) => <td>{club.name}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.players}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Matches_played}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Games_won}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Games_drawn}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Games_lost}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Goals_scored}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Goals_conceded}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Goal_difference}</td>)}
  </tr>
  <tr>
  {Leagues.map((club) => <td>{club.Number_of_points}</td>)}
  </tr>
</table>
    </div>
  )
}

export default LeagueTable
