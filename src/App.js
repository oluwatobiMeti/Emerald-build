import './App.css';
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
    

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Dashboard' element={<DashboardNav/>}/>
        <Route path='LeagueDashboard' element={<LeagueDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
