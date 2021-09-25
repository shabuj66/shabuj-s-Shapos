import React from 'react';
import './Product.css'
const Product = (props) => {
   const{name,price,img,priceFraction,seller,stock} = props.product
   return (
      <div className = 'product-container'>
         <div className="product-img">
            <img src={img} alt="product-img"/>
         </div>
         <div className="product-details">
            <h3> {name} </h3>
            <div className="details-items">             
             <p>Price: {price}</p>
             <p> Price Fraction : {priceFraction}</p>
             <p> Sold by : {seller}</p>
             <p> only {stock} left in stock - order soon</p>
             {/*************** Event Handle add button *****************/}
             <button
             onClick ={()=> props.handleAddToCart(props.product)}
              className ='cart-btn'> Add to cart </button>
            {/*************** Event Handle add button *****************/}
            </div>
         </div>         
      </div>
   );
};
export default Product;