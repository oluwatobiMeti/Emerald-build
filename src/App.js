import './App.css';
import { useEffect } from 'react';
import Home from './Pages/Home';
import DashboardNav from './Dashboard/DashboardNav';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
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
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Dashboard' element={<DashboardNav/>}/>
        <Route path='LeagueDashboard' element={<LeagueDashboard/>}/>
        <Route path='ClubDashboard' element={<ClubDashboard/>}/>
        {/* <Route path='Gallery' element={<Gallery/>}/>
        <Route path='Categories' element={<Categories/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
