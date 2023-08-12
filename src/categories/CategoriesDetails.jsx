import Matches from './Matches';
import LeagueTable from './LeagueTable';
import CategoriesNav from './CategoriesNav';

function CategoriesDetails({show}) {
  return (
    <div>
      {(show === "Leagues")? <LeagueTable/>:(show === "Leagues")?<Matches/>:<LeagueTable/>}
    </div>
  )
}

export default CategoriesDetails;
