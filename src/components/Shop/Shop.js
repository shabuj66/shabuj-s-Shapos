import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
   const [products, setProducts] = useState([]);
   console.log(products)
   const [cart, setCart] = useState([])

   useEffect( ()=> {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
      .then(res => res.json())
      .then(data => setProducts(data))
   } 
   ,[]);
   const handleAddToCart = product => {
      const newCart = [...cart,product]
      setCart(newCart)
   }
   return (
      <div className ='shop-container'>
            <div className="products-container">
               <h1> Shabuj's Online Shope</h1> 
               {
                  products.map( product => <Product 
                     key = {product.key}
                     product = {product}
                     handleAddToCart = {handleAddToCart}
                  />)
               }            
            </div>  
            <div className="products-cart">
               <Cart cart = {cart} />
            </div>                     
      </div>
   );
};

export default Shop;
