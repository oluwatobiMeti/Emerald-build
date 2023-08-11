import React from 'react'

function Player({League}) {
  return (
    <div>
      <table>
  <tr>
    <th>NAME</th>
    <th>CLUB</th>
    <th>APPEARANCE</th>
    <th>GOAL</th>
    <th>RATION</th>
    <th>POINT</th>
  </tr>
  <tr>
    {League.map((players) => <th>{players.Name}</th>)}
  </tr>
  <tr>
    {League.map((players) => <th>{players.CLUB}</th>)}
  </tr>
  <tr>
    {League.map((players) => <th>{players.APPEARANCE}</th>)}
  </tr>
  <tr>
    {League.map((players) => <th>{players.GOAL}</th>)}
  </tr>
  <tr>
    {League.map((players) => <th>{players.RATION}</th>)}
  </tr>
  <tr>
    {League.map((players) => <th>{players.POINT}</th>)}
  </tr>
</table>
    </div>
  )
}

export default Player;
