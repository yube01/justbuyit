import React, { useState } from "react";
import "./product.scss";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(1);
  const [quantity, setQuantity] = useState(5);
  const images = [
    "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        
        <h1>Title</h1>
        <span className="price">$13</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          assumenda minima eum harum distinctio obcaecati fuga cupiditate velit
          sapiente temporibus quo quia eius ratione corporis dolorem mollitia
          ea, incidunt sequi?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          // onClick={() =>
          //   dispatch(
          //     addToCart({
          //       id: data.id,
          //       title: data.attributes.title,
          //       desc: data.attributes.desc,
          //       price: data.attributes.price,
          //       img: data.attributes.img.data.attributes.url,
          //       quantity,
          //     })
          //   )
          // }
        >
          
          <span class="material-symbols-outlined">shopping_cart</span>ADD TO
          CART
        </button>
        <div className="links">
              <div className="item">
              <span class="material-symbols-outlined">
favorite
</span> ADD TO WISH LIST
              </div>
              <div className="item">
              <span class="material-symbols-outlined">
balance
</span>ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          
        
      </div>
    </div>
  );
};

export default Product;
