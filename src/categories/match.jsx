

function match({club1, club1Icon, club2Icon,club2, goal1, goal2}) {
  return (
    <div className='match'>
      jabsdfbbajksd
      <div className="club_one">
         <p>{club1}</p>
         {club1Icon}
      </div>
      <div className="goal">
        <p>{goal1}</p> - <p>{goal2}</p>
      </div>
      <div className="club_two">
         <p>{club2}</p>
         {club2Icon}
      </div>
    </div>
  )
}

export default match
