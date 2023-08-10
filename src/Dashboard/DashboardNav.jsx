import React from 'react'
import Button from '../component/Button';
import LinkComp from '../component/LinkComp';
import {AiFillHome} from "react-icons/ai"
import "./dashboard.css"
function DashboardNav() {
  return (
    <div className="navDashboard">
    <div className='dashboard__nav'>
      <span>SoccerVerse</span>
      <div className="dashboard__container">
      <div className="dashboard__search">
        <input className='search__input' type="text" />
        <Button className="search__btn" title="search"/>
      </div>
     <LinkComp className="dashboard__home-icon" title={<AiFillHome/>} to="/"/>
     </div>
     
    </div>
      <div className={`dashboard__search mobile_style`}>
       <input className='search__input' type="text" />
       <Button className="search__btn" title="search"/>
      </div>
  </div>
  
  )
}

export default DashboardNav
