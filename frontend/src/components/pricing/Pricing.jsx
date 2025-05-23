import React from 'react'
import "./Pricing.css"

const Pricing = () => {
  return (
    <section id="pricing-area">
     <div className="container">
         <div className="pricing-title">
            <p>Devoted to wonderful beauty</p>
         <h1>Events Pricing</h1>
         </div>
      <div className="prices">
         <div className="price">
            <span className='pricing-price'>$16</span><span> per table</span>
            <h4>Birthday Events</h4>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop now</button>
         </div>
         <div className="price">
            <span className='pricing-price'>$16</span><span> per table</span>
            <h4>Birthday Events</h4>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop now</button>
         </div>
         <div className="price">
            <span className='pricing-price'>$16</span><span> per table</span>
            <h4>Birthday Events</h4>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop now</button>
         </div>
      </div>
     </div>
    </section>
  )
}

export default Pricing