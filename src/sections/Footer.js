import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className="footer_wrapper">
          <div className="footer">
            <div id="section">
              <h3>SoccerVerse</h3>
                <p className="paragraphs">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollitAmet minim mollit.
                </p>
              </div>

              <div id="section">
                    <p>Products</p>
                    <div className="paragraphs">
                    <p>Overview</p>
                    <p>Feature</p>
                    <p>Solutions</p>
                    <p>Tutorials</p>
                    <p>Pricing</p>
                </div> 
            </div>
            <div id="section">
                <p>Company</p>
                <div className="paragraphs">
                    <p>About us</p>
                    <p>Contacts</p>
                    <p>Press</p>
                    <p>News</p>  
                    <p>Careers</p>
                </div>
            </div>

            <div id="section">
                <p>Legal</p>
                <div className="paragraphs">
                    <p>Terms and Services</p>
                    <p>Privacy</p>
                    <p>Support</p>
                    <p>License</p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Footer
