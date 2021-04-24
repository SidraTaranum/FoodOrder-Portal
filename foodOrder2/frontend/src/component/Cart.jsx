import React from 'react'
const Cart = ({cart,removeFromCart}) => {
   return (
      <>
           <h3 style={{textAlign:'center'}}>You have ordered:</h3>
<section className="main">
   {cart.map((product,idx)=>(
      <>
      <div className="pizzas" key={idx}>   
         <div id="pizza_content">
              <h4 className="pizza-title">{product.name}</h4>
              <p className="pizza-text">{product.description}<br/></p>
              <h5>Price:Rs.{product.price}</h5>
              <button className="addButton" onClick={()=> removeFromCart(product) }>Remove</button>
              </div>
              <img className="pizza-img" src= {product.img} alt={product.name}  />
  
          </div> 
   </>))}
   <button className="clearButton" onClick={()=> {   const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
  };
  fetch('http://localhost:8000/clearItem', requestOptions)
      .then(response => response.json());} }>Place Order</button>
   </section>
      </>
   )
}

export default Cart;
