import Matches from './Matches';
import LeagueTable from './LeagueTable';
import CategoriesNav from './CategoriesNav';

function CategoriesDetails({show}) {
  return (
    <div>
      {(show === "Leagues")? <LeagueTable/>:<Matches/>}
    </div>
  )
}

export default CategoriesDetails;
