import React from 'react';

const Cart = (props) => {
   const {cart} = props
   let total = 0
   for(const product of cart){
      total = total + product.price
   }
   return (
      <div>
         <h4> Item length : {props.cart.length} </h4>
         <h3> Total Amount : ${total.toFixed(2)} </h3>
      </div>
   );
};
export default Cart;