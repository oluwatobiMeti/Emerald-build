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
import Gallery from './Pages/Gallery';
import Categories from './categories/Categories';

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
        {/* <Route path='Gallery' element={<Gallery/>}/>
        <Route path='Categories' element={<Categories/>}/> */}
=======
        <Route path='Gallery' element={<Gallery/>}/>
>>>>>>> bf85beb89f681c732228ee8387a6c9870e279ee5
      </Routes>
    </BrowserRouter>
  );
}

export default App;
