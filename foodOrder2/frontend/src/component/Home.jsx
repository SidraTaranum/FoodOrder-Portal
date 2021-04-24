import React  from 'react'
import Navbar from './Navbar'
import Product from './Product'
import {BrowserRouter as Router,Route,Link  } from 'react-router-dom'
const Home = () => {
   return (
      <> 
      <Router>
       {/* <Navbar/> */}
       <section className="Home_section">
             <div className="pizza">
   {/* <Link to="/Product"> */}
             <img src="https://res.cloudinary.com/dm64gdjus/image/upload/v1616171483/food/pizza_header_hap76j.webp" className="header_img"  alt="pizza"/>               
            <p class="title">Pizza</p>
   {/* </Link>     */}
             </div>
            <div className="burger">
   {/* <Link to="">        */}
             <img src="https://res.cloudinary.com/dm64gdjus/image/upload/v1616171483/food/burger_header_axvjqx.jpg"  className="header_img" alt="burger" />
               <p class="title">Burger</p>
   {/* </Link> */}
             </div>
          </section>
   {/* <Route path="/Product" component={Product}/> */}
        
   </Router>
      </>
   )
}

export default Home;
