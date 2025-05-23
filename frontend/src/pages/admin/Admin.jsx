import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, getProducts, searchProduct, sortBy } from '../../redux/productSlice';
import CreateFrom from './CreateFrom';
import "./Admin.css"

const Admin = () => {
  let {products}= useSelector((state)=>state.products)
   let dispatch = useDispatch()
   useEffect(()=>{
      dispatch(getProducts())
   },[dispatch])
  return (
    <div className='container'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Admin</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <CreateFrom/> 
        <div className="sort">
          <div className="search">
            <input type="text" placeholder='Search...' onChange={(e)=>dispatch(searchProduct(e.target.value))}/>
          </div>
          <div className="sortBy">
            <button onClick={()=>dispatch(sortBy("high"))}>SortByHigh</button>
            <button onClick={()=>dispatch(sortBy("low"))}>SortByLow</button>
          </div>
        </div>
      <Table  bordered >
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Count</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map((item)=>(
          <tr key={item._id}  style={{verticalAlign:"middle"}}>
            <td><img src={item.image} alt="" style={{width:"150px"}}/></td>
            <td>{item.title}</td>
            <td>${item.price}</td>
          <td>
            {item.description}
          </td>
          <td> <Button variant="danger" onClick={()=>dispatch(deleteProducts(item._id))}>Remove</Button></td>
        </tr>
          ))
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Admin