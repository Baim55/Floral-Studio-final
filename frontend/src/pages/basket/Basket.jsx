import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { minusBtn, plusBtn, removeBasket } from '../../redux/basketSlice';
import "./Basket.css"

const Basket = () => {
  let {basket}= useSelector((state)=>state.basket)
  let total = basket.reduce((sum,item)=>sum+item.price*item.count,0)
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div className='container'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Basket</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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
          basket && basket.map((item)=>(
          <tr key={item._id}  style={{verticalAlign:"middle"}}>
            <td><img src={item.image} alt="" style={{width:"150px"}}/></td>
            <td>{item.title}</td>
            <td>${item.price}</td>
          <td>
            <button className='basket-btn' onClick={()=>dispatch(minusBtn(item._id))} disabled={item.count==1}>-</button>
            {item.count}
            <button className='basket-btn' onClick={()=>dispatch(plusBtn(item._id))}>+</button>
          </td>
          <td> <Button variant="danger" onClick={()=>dispatch(removeBasket(item._id))}>Remove</Button></td>
        </tr>
          ))
        }
      </tbody>
    </Table>
    <p>Total Price: ${total}</p>
    </div>
  )
}

export default Basket