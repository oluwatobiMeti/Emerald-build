import React from "react";
import classes from "./Testimonial.module.css";
import user1 from "../images/players/lewandoski.jpg";
import user2 from "../images/players/mbappe.jpg";

const Testimonial = () => {
    return(
        <section className={classes.testimonial_section}>
            <div className={classes.testimonial_content_wrapper}>
                <h3>Testimonials</h3>
                
                <div className={classes.testimonial_cards_wrapper}>
                    <div className={classes.testimonial_card}>
                        <div className={classes.testimonial__image_wrapper}>
                            <img src={user1} alt="testimonail image" className={classes.testimonial_card_img} />
                        </div>
                        <div className={classes.testimonial_card_conten_wrapper}>
                            <p className={classes.testimonial_text}>this is the best and perfect website for football data vetting and viewing livescores and previous data the best and perfect website for football data of football games and the likes</p>
                            <h3>David Micah-Daniels</h3>
                        </div>
                    </div>
                    <div className={classes.testimonial_card}>
                        <div className={classes.testimonial__image_wrapper}>
                            <img src={user2} alt="testimonail image" className={classes.testimonial_card_img} />
                        </div>
                        <div className={classes.testimonial_card_conten_wrapper}>
                            <p className={classes.testimonial_text}>this is the best and perfect website for football data vetting and viewing livescores and previous data the best and perfect website for football data of football games and the likes</p>
                            <h3>David Micah-Daniels</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;