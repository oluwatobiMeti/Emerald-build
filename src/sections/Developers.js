import React from 'react';
import classes from "./Developers.module.css";
import img from "../images/players/lewandoski.jpg";
import dev1 from "../images/Developers/dmd.jfif";
import dev2 from "../images/Developers/vivian.jfif";
import dev3 from "../images/Developers/eze.jfif";
import dev4 from "../images/Developers/tobi.jfif";
import dev5 from "../images/Developers/zainab.jfif";
import dev6 from "../images/Developers/malik.jfif";

const Developers = () => {
  return (
    <div className={classes.developer_section}>
        <h3>Meet Our Team</h3>
      <div className={classes.developers_card_wrapper}>
        <div className={classes.developers_card}>
            <img src={dev1} className={classes.developers_card_image} />
            <div className={classes.developers_description_wrapper}>
                <h3>David Micah-Daniels</h3>
                <p>My name is David Micah-Daniels and i am a React developer, i am very skilled in javascript and javascript libaries.</p>
            </div>
        </div>
        <div className={classes.developers_card}>
            <img src={dev4} className={classes.developers_card_image} />
            <div className={classes.developers_description_wrapper}>
                <h3>David Micah-Daniels</h3>
                <p>My name is David Micah-Daniels and i am a React developer, i am very skilled in javascript and javascript libaries.</p>
            </div>
        </div>
        <div className={classes.developers_card}>
            <img src={dev2} className={classes.developers_card_image} />
            <div className={classes.developers_description_wrapper}>
                <h3>David Micah-Daniels</h3>
                <p>My name is David Micah-Daniels and i am a React developer, i am very skilled in javascript and javascript libaries.</p>
            </div>
        </div>
        <div className={classes.developers_card}>
            <img src={dev3} className={classes.developers_card_image} />
            <div className={classes.developers_description_wrapper}>
                <h3>David Micah-Daniels</h3>
                <p>My name is David Micah-Daniels and i am a React developer, i am very skilled in javascript and javascript libaries.</p>
            </div>
        </div>
        <div className={classes.developers_card}>
            <img src={dev5} className={classes.developers_card_image} />
            <div className={classes.developers_description_wrapper}>
                <h3>David Micah-Daniels</h3>
                <p>My name is David Micah-Daniels and i am a React developer, i am very skilled in javascript and javascript libaries.</p>
            </div>
        </div>
        <div className={classes.developers_card}>
            <img src={dev6} className={classes.developers_card_image} />
            <div className={classes.developers_description_wrapper}>
                <h3>David Micah-Daniels</h3>
                <p>My name is David Micah-Daniels and i am a React developer, i am very skilled in javascript and javascript libaries.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Developers;
