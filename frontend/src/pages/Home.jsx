import React from 'react'
import {Helmet} from "react-helmet";
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Products from '../components/products/Products';
import Pricing from '../components/pricing/Pricing';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Hero/>
            <About/>
            <Products/>
            <Pricing/>
            <Contact/>
    </div>
  )
}

export default Home