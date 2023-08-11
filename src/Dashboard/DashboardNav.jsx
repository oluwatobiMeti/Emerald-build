import React from 'react'
import Button from '../component/Button';
import LinkComp from '../component/LinkComp';
import {AiFillHome} from "react-icons/ai";
import "./dashboard.css";


function DashboardNav() {
  return (
    <div className="navDashboard">
    <div className='dashboard__nav'>
      <span>SoccerVerse</span>
      <div className="dashboard__container">
     <LinkComp className="dashboard__home-icon" title={<AiFillHome/>} to="/"/>
     </div>
     
    </div>
  </div>
  
  )
}

export default DashboardNav;
