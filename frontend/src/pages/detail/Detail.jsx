import React from 'react'
import {Helmet} from "react-helmet";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./Detail.css"

const Detail = () => {
  let {id}=useParams()
   let {products}= useSelector((state)=>state.products)
   let product = products.find((item)=>item._id ==id)
  return (
    <section id="detail-area">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="container">
              <div className="row detail">
                <div className="col-6 detail-img">
                  <img src={product.image} alt="" />
                </div>
                <div className="col-6 detail-content">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p className='price'>${product.price}</p>
                  <button>Add Basket</button>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Detail