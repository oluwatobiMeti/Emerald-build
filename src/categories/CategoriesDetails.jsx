import Matches from './Matches';
import LeagueTable from './LeagueTable';
// import CategoriesNav from './CategoriesNav';

function CategoriesDetails({show, League}) {
  return (
    <div>
      {(show === "Leagues")? <LeagueTable League={League}/>:(show === "Matches")?<Matches/>:<LeagueTable League={League}/>}
    </div>
  )
}

export default CategoriesDetails;
