import React from 'react'

const Order = ({Store}) => {
  return (
    <div>
      <nav className='navbar navbar-light p-3'>
        <a href="#" className='navbar-brand'>Restaurant</a>
        <button className='btn btn-primary'>Order <span className='badge bg-secondary'>{Store.length}</span></button>
      </nav>
      <div className='d-flex flex-wrap'>
      {
        Store.map((e,i) => (
          <div className='col-md-4 col-lg-4 col-sm-6 p-3 text-center' key={i}>
<div className="card " >
  <img src={e.url} className="card-img"/>
  <div className="card-body">
    <h4 className="card-title">{e.name}</h4>
    <p>Price : {e.price}</p>
  
  </div>
</div>


        </div>))
      }
      </div>
        
    </div>
  )
}

export default Order