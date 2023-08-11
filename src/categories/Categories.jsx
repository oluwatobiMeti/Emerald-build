import React, {useState} from 'react'
import "./categories.css"
import CategoriesNav from './CategoriesNav';
import Nav from '../component/Nav';
import Footer from '../sections/Footer';
import CategoriesDetails from './CategoriesDetails';
function Categories({className}) {
  const [show, setShow] = useState("Leagues");
  return (
    <div>
      <Nav/>
      <div className="categorieContainer">
      <CategoriesNav setShow={setShow}/>
      <CategoriesDetails show={show}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Categories
