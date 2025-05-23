import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navlist.css"


const Navlist = () => {
  return (
    <div>
      <ul className='list'>
         <li><Link to="/" className='list-link'>Home</Link></li>
         <li><Link to="/about" className='list-link'>About Us</Link></li>
         <li><Link to="/portfolio" className='list-link'>Portfolio</Link></li>
         <li><Link to="/pricing" className='list-link'>Pricing</Link></li>
         <li><Link to="/contacts" className='list-link'>Contacts</Link></li>
      </ul>
      <div className="burger">
         <RxHamburgerMenu />
      </div>
    </div>
  )
}

export default Navlist