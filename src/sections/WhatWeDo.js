import React from "react";
import classes from "./WhatWeDo.module.css";

const WhatWeDo = () => {
    return(
        <section className={classes.what_we_do_section}>
            <div className={classes.what_we_do_content_wrapper}>
                <h2>What We Do</h2>
                <div className={classes.purpose_card_wrapper}>
                    <div className={classes.purpose_card}>
                        <ion-icon name="bar-chart-outline"></ion-icon>
                        <p className={classes.purpose_card_txt}>We provide you with football data and statistics, you would also get access to previous leasons football data.</p>
                        <a href="#">Explore</a>
                    </div>
                    <div className={classes.purpose_card}>
                        <ion-icon name="analytics-outline"></ion-icon>
                        <p className={classes.purpose_card_txt}>We also provide you with information about footballers and football leagagues with less stress and easy access.</p>
                        <a href="#">Explore</a>
                    </div>
                    <div className={classes.purpose_card}>
                        <ion-icon name="football-outline"></ion-icon>
                        <p className={classes.purpose_card_txt}>We provide statisfaction and save time of football enthuciast by providing a reliable and standard solution.</p>
                        <a href="#">Explore</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;