import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            
          </div>
          <div className="item">
            <span>USD</span>
            
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">LAMASTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
           
            <div className="cartIcon" >
              
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )}
  
export default Navbar