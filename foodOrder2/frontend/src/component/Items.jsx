import React,{useState} from 'react'
export const Items = ({addToCart}) => {
   const [products] = useState([
      {
         "name": "Tomato Basil Italian Pizza",
         "img": "https://res.cloudinary.com/dm64gdjus/image/upload/v1616221247/food/Pizza-basil_ar6bqx.webp",
         "price": "450",
         "description": "Dressed with oil, the origanum and garlic cloves"
      },
      {
         "name": "Bombay Pizza",
         "img": "https://res.cloudinary.com/dm64gdjus/image/upload/v1616221406/food/bombay-pizza_tuiqfx.jpg",
         "price": "550",
         "description": "Dressed with oil, the origanum and garlic cloves"
   
      },
      {
         "name": "Sicilia Pizza",
         "img": "https://res.cloudinary.com/dm64gdjus/image/upload/v1616221247/food/Pizza-basil_ar6bqx.webp",
         "price": "450",
         "description": "Dressed with oil, the origanum and garlic cloves"
   
      }
   ])
   
   return (
      <>
         <h3 style={{textAlign:'center'}}>Tasty Pizzas</h3>
<section className="main">
   {/* <h1>Products</h1> */}
       {products.map((product,idx)=>(
        <div className="pizzas" key={idx}>   
         <div id="pizza_content">
              <h4 className="pizza-title">{product.name}</h4>
              <h5>{product.price}</h5>
              <p className="pizza-text">{product.description}<br/></p>
              <button className="addButton" onClick={()=> addToCart(product) }>Order Now</button>
              </div>
              <img className="pizza-img" src= {product.img} alt={product.name}  />
          </div>  
      ))}
            
       
      </section>


      </>
   )
}
export default Items;