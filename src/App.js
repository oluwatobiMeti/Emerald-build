import './App.css';
import Home from './Pages/Home';
import Nav from './component/Nav';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';

// You can do this:

    

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
