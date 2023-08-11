import './App.css';
import Home from './Pages/Home';
import DashboardNav from './Dashboard/DashboardNav';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About';
import LeagueDashboard from './Dashboard/LeagueDashboard';
import ClubDashboard from './Dashboard/ClubDashboard';
<<<<<<< HEAD
import Categories from './categories/Categories';
=======
import Gallery from './Pages/Gallery';
import PlayersDashboard from './Dashboard/PlayersDashboard';
>>>>>>> 2d6438498a2c34b90ea8b5bb419987fa071f9233

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='About' element={<About/>}/>
        <Route path='Dashboard' element={<DashboardNav/>}/>
        <Route path='LeagueDashboard' element={<LeagueDashboard/>}/>
        <Route path='ClubDashboard' element={<ClubDashboard/>}/>
<<<<<<< HEAD
        <Route path='Categories' element={<Categories/>}/>
=======
        <Route path='PlayersDashboard' element={<PlayersDashboard/>}/>
        <Route path='Gallery' element={<Gallery/>}/>
>>>>>>> 2d6438498a2c34b90ea8b5bb419987fa071f9233
      </Routes>
    </BrowserRouter>
  );
}

export default App;
