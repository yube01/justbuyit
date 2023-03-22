import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import En from "../../img/en.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={En} alt="" />
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <div className="item">
            <span>USD</span>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            JUSTBUYIT
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <span class="material-symbols-outlined">search</span>
            <span class="material-symbols-outlined">person</span>
            <span class="material-symbols-outlined">favorite</span>

            <div className="cartIcon">
              <span class="material-symbols-outlined">shopping_cart</span>
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
