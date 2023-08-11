import React from "react";
import Nav from "../component/Nav";
import Leagues from "../sections/Leagues";
import Footer from "../sections/Footer";
import AboutContent from "../component/AboutContent";
import AboutForm from "../component/AboutForm";
import Developers from "../sections/Developers";

function About() {
  return (
    <div>
      <Nav />
      <AboutContent/>
      <Developers />
      <AboutForm/>
      <Footer />
    </div>
  );
}

export default About;
