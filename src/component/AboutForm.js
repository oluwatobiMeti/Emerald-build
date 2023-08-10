import React from 'react';
import "./aboutForm.css"

function AboutForm() {
  return (
        <div class="lay_out">
            <div class="section">
                <p class="section__text">Book a concultation</p>
                <p class="section__text">Environmental Health Services Limited</p>
                <p>5, Smithills vale</p>
                <p>Bolton BLI GN</p>

                <p class="section__text">Phone:</p>
                <p>+(44)07988079947</p>

                <p class="section__text">Email:</p>
                <p>example@gmail.com</p>
                <p class="aim_txt">We aim to respond to all queries within 48 hours. Follow us on out social media
                    channels for the latest updates and resources. We look froward to hearing from you! 
                </p>
            </div>

            <div class="section">
                <p>We would love to hear from you to discuss how EHL can help your business</p>
                <div>
                    <form action="">
                        <div class="form_group">
                            <div class="form_group_cell">
                                <label for="firstname">First name</label>
                                <input type="text" name="" id="" placeholder="First name"/>
                            </div>
                            <div class="form_group_cell">
                                <label for="firstname">Last name</label>
                                <input type="text" name="" id="" placeholder="Last name"/>
                            </div>
                        </div>
                        <div class="form_group">
                            <div class="form_group_cell">
                                <label for="email">Email</label>
                                <input type="email" name="" id="" placeholder="you@company.com"/>
                            </div>
                            <div class="form_group_cell">
                                <label for="phone number">Phone Number</label>
                                <input type="number" name="" id="" placeholder="+(44)07988079947"/>
                            </div>
                        </div>
                        <div class="message_box_wrapper">
                            <label for="message">Message</label>
                            <textarea name="" id="" cols="40" rows="10" placeholder="your message here...."></textarea>
                        </div>
                        <p>you agree to our friendly privacy policy</p>
                        <button class="button">Send Message</button>
                    </form>
                </div>

            </div>


        </div>
  )
}

export default AboutForm
