import React from 'react'
import "./contactContent.css"

function ContactContent() {
  return (
       <section className="contact-page-body">

<img src="image.png" className="contact-page-image"/>



<div className="Text_input-holder">

    <div className="text_holder">
        <h3>CONTACT US</h3>
        <p>A possible summary for your contact page is:

            **Contact Us**

            We want your feedback on our sport updates. Name, email, and source required. We'll respond soon.
            Thanks.</p>
    </div>

    <form action="" id="input-form">
        <div className="Input-box">
            <label for="name">Name:</label><br/>
            <input className="input-field" type="text" name="Fullname" placeholder="Fullname" required/>
        </div>

        <div className="Input-box">
            <label for="email">Email:</label><br/>
            <input className="input-field" type="email" name="Email" placeholder="Email" required/>
        </div>

        <div className="Input-box">
            <label for="select-where">Where did you hear from us?</label> <br/>
            <select id="select-where" className="datalist-field" name="select-where" required>
                <option value="">Please choose one option:</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="ad">Facebook ad</option>
                <option value="others">Others</option>
            </select>
        </div>

        <div>
            <input type="submit" className="myButton" value="Sign Up Now"/>
        </div>

    </form>

</div>





</section>
  )
}

export default ContactContent
