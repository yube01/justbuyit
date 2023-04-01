import React, { useEffect, useState } from "react";
import "./product.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);


  const id = useParams().id;


  

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data)

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={process.env.IMAGE_URL + data?.attributes?.img1?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img1")} />
          <img src={process.env.IMAGE_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} />
        
        </div>
        <div className="mainImg">
          <img src={process.env.IMAGE_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
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
            <span class="material-symbols-outlined">favorite</span> ADD TO WISH
            LIST
          </div>
          <div className="item">
            <span class="material-symbols-outlined">balance</span>ADD TO COMPARE
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
