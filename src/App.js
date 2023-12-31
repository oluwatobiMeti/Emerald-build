import './App.css';
import Home from './Pages/Home';
import DashboardNav from './Dashboard/DashboardNav';
import TeamPlayersGroup from './Dashboard/TeamPlayersGroup';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About';
import LeagueDashboard from './Dashboard/LeagueDashboard';
import ClubDashboard from './Dashboard/ClubDashboard';
import Categories from './categories/Categories';
import Gallery from './Pages/Gallery';
import PlayersDashboard from './Dashboard/PlayersDashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='About' element={<About/>}/>
        <Route path='Dashboard' element={<DashboardNav/>}/>
        <Route path='LeagueDashboard' element={<LeagueDashboard/>}/>
        <Route path='ClubDashboard' element={<ClubDashboard/>}/>
        <Route path='Categories' element={<Categories/>}/>
        <Route path='PlayersDashboard' element={<PlayersDashboard/>}/>
        <Route path='TeamPlayersGroup' element={<TeamPlayersGroup/>}/>
        <Route path='Gallery' element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
