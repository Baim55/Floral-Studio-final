import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import Product from '../product/Product'
import "./Products.css"

const Products = () => {
   let {products}= useSelector((state)=>state.products)
   let dispatch = useDispatch()
   useEffect(()=>{
      dispatch(getProducts())
   },[dispatch])
  return (
    <section>
      <div className='container'>
      <div className="products-title">
         <p>Devoted to wonderful beauty</p>
         <h1>Flowers Pricing</h1>
      </div>
      <div className="products">
         {
            products && products.map((item)=><Product key={item._id} product={item}/>)
         }
      </div>
    </div>
    </section>
  )
}

export default Products