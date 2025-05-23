import React from 'react'
import "./Contact.css"
import contact1 from "../../assets/images/portr1.jpg"
import contact2 from "../../assets/images/portr2.jpg"
import contact3 from "../../assets/images/portr3.jpg"

const Contact = () => {
  return (
    <section>
      <div className="container">
      <div className="contact-title">
         <p>Contacts</p>
      <h1>Our Team</h1>
      </div>
      <div className="contacts">
         <div className="contact">
            <img src={contact1} alt="" />
            <p className='name'>Velva Kopf</p>
            <p>Biologist</p>
         </div>
          <div className="contact">
            <img src={contact2} alt="" />
            <p className='name'>Sarah Palmer</p>
            <p>Florist</p>
         </div>
          <div className="contact">
            <img src={contact3} alt="" />
            <p className='name'>Jessica Swift</p>
            <p>Photographer</p>
         </div>
      </div>
      </div>
    </section>
  )
}

export default Contact