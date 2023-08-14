import React, {useState} from 'react'
import "./categories.css"
import CategoriesNav from './CategoriesNav';
import Nav from '../component/Nav';
import Footer from '../sections/Footer';
import CategoriesDetails from './CategoriesDetails';
function Categories() {
  const [show, setShow] = useState("Leagues");
  const [League, setLeague] = useState("premier League");
  console.log(show, League);
  return (
    <div>
      <Nav/>
      <div className="categorieContainer">
      <CategoriesNav setLeague={setLeague} setShow={setShow}/>
      <CategoriesDetails League={League} show={show}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Categories
