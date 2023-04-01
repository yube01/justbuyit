import React from "react";
import "./cart.scss";
import { useSelector } from "react-redux";
const Cart = () => {
 

  const products = useSelector(state=>state.cart.products)

  
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
   
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={ process.env.IMAGE_URL + item?.img1} alt="" />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>

          <div className="delete">
            <span class="material-symbols-outlined">delete</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
