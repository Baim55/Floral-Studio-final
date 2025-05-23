import React from 'react'
import "./About.css"
import aboutImg from "../../assets/images/b4.jpg"

const About = () => {
  return (
    <section id="about-area">
      <div className="container">
         <div className="about">
         <div className="about-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
            <div className="about-btn">
               <button>Read more</button>
            </div>
         </div>
         <div className="about-img">
            <img src={aboutImg} alt="" />
         </div>
      </div>
      </div>
    </section>
  )
}

export default About