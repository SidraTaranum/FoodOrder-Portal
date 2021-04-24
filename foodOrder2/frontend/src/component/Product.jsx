import React ,{useState} from 'react'
import Itmes from './Items'
import Cart from './Cart'
// import axios from 'axios'
const AddToProduct ='product';
const SelectedProduct ='cart'

const Product = () => {
   
   const [cart, setcart] = useState([])

   const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
  };
  fetch('http://localhost:8000', requestOptions)
      .then(response => response.json())
      .then( (data) =>{
         setcart(data);
      });
   
  
   const [page, setPage] = useState(AddToProduct)
 
const navigate =(nextpage) =>{
   setPage(nextpage)
}

const removeFromCart =(removeProduct) =>{
   const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(removeProduct)
  };
  fetch('http://localhost:8000/removeItem', requestOptions)
      .then(response => response.json());
      console.log(removeProduct);
      setcart(cart.filter((product)=>product !== removeProduct))
 }



const addToCart = (product) =>{
   const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
  };
  fetch('http://localhost:8000/addItem', requestOptions)
      .then(response => response.json())
      .then(data => setcart([...cart,{...data}]));
      console.log('add to cart');
  // setcart([...cart,{...product}])
}

return (
      <>
      {/* <Navbar/> */}
       <header> 
         <h3>Food Ordering Portal </h3> 
         <i class="fa fa-shopping-cart cartIcon" onClick={()=> navigate(SelectedProduct) }>  {cart.length}</i>
       </header>
               {page=== AddToProduct && ( <Itmes addToCart={addToCart} />) }
               {page=== SelectedProduct && (<Cart cart={cart} removeFromCart={removeFromCart} /> )   }
      
      </>
   )
}

export default Product;
