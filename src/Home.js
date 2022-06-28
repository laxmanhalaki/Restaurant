import React from 'react'
import Data from "./api";
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

const Home = ({Store}) => {
  const item=Data[0].items
  const [number,setNumber]=useState(0);
  const navigate=useNavigate()

const handleorder=(img,name,price)=>{
const order={
  url:img,
  name:name,
  price:price
}
Store.push(order)
setNumber(number+1)
}

  return (
    <div>
      <nav className='navbar navbar-light p-3'>
        <a href="#" className='navbar-brand'>Restaurant</a>
        <button className='btn btn-primary' onClick={()=>{navigate("/orders")}}>Order <span className='badge bg-secondary'>{number}</span></button>
      </nav>
      <div className='d-flex flex-wrap'>
      {
        item.map((e,i) => (
          <div className='col-md-4 col-lg-4 col-sm-6 p-3 text-center' key={i}>
<div className="card " >
  <img src={e.url} className="card-img"/>
  <div className="card-body">
    <h4 className="card-title">{e.name}</h4>
    <p>Price : {e.price}</p>
    <button className='btn btn-primary' onClick={()=>{
      handleorder(e.url,e.name,e.price)
    }}>Order</button>
  </div>
</div>


        </div>))
      }
      </div>
        
    </div>
  )
}

export default Home