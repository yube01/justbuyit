import React from "react";
import "./cart.scss";
const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80",
      img2: "https://images.unsplash.com/photo-1493704099487-36e3c0412f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
      title: "yellow",
      isNew: false,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor ad quidem, qui, quos esse et magni recusandae quam quo nobis quasi illum quae, eos iure aliquid. Nostrum, nam doloremque.",
      oldPrice: 12,
      price: 38,
    },
    {
      id: 1,
      img1: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      img2: "https://images.unsplash.com/photo-1654806389957-f8ca19bb7b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "white",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor ad quidem, qui, quos esse et magni recusandae quam quo nobis quasi illum quae, eos iure aliquid. Nostrum, nam doloremque.",
      isNew: false,
      oldPrice: 149,
      price: 100,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item?.img1} alt="" />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">${item.price}</div>
          </div>

          <div className="delete">
            <span class="material-symbols-outlined">delete</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$456</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
