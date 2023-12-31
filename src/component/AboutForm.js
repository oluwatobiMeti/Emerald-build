import React from 'react';
import "./aboutForm.css"

function AboutForm() {
  return (
        <div class="lay_out">
            <div class="section">
                <p class="section__text">Get Match Updates.</p>
                <p class="section__text">Submit your email for email updates.</p>
                <p>05 Modupe house</p>
                <p>Adqamasingba ibadan</p>

                <p class="section__text">Phone:</p>
                <p>+(234)7035326207</p>

                <p class="section__text">Email:</p>
                <p>aptechibadan@gmail.com</p>
                <p class="aim_txt">We aim to respond to all queries within 48 hours.  We look froward to hearing from you! drop your mesage in the message box.
                </p>
            </div>

            <div class="section">
                <p>We would love to hear from you to discuss how SoccerVerse can help you.</p>
                <div>
                    <form action="">
                        <div class="form_group">
                            <div class="form_group_cell">
                                <label htmlFor="firstname">First name</label>
                                <input type="text" name="" id="" placeholder="First name"/>
                            </div>
                            <div class="form_group_cell">
                                <label htmlFor="firstname">Last name</label>
                                <input type="text" name="" id="" placeholder="Last name"/>
                            </div>
                        </div>
                        <div class="form_group">
                            <div class="form_group_cell">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="" id="" placeholder="you@company.com"/>
                            </div>
                            <div class="form_group_cell">
                                <label htmlFor="phone number">Phone Number</label>
                                <input type="number" name="" id="" placeholder="+(44)07988079947"/>
                            </div>
                        </div>
                        <div class="message_box_wrapper">
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="" cols="40" rows="10" placeholder="your message here...."></textarea>
                        </div>
                        <button class="send_button">Send Message</button>
                    </form>
                </div>

            </div>


        </div>
  )
}

export default AboutForm
