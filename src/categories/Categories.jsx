import React from 'react'
import LeagueSidebar from "../Dashboard/LeaguesSidebar";
import CategoriesDetails from './CategoriesDetails';
import CategoriesNav from './CategoriesNav';
function Categories({className}) {
  const [show, setShow] = useState("Leagues");
  return (
    <div className={className}>
      <CategoriesNav/>
    <div>
         <CategoriesDetails/>
     </div>
    </div>
  )
}

export default Categories
