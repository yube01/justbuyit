import React from 'react'
import "./contach.scss"
const Contact = () => {
  return (
    <div className="contact">
    <div className="wrapper">
      <span>BE IN TOUCH WITH US:</span>
      <div className="mail">
        <input type="text" placeholder="Enter your e-mail..." />
        <button>JOIN US</button>
      </div>
      <div className="icons">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-google"></i>
      <i class="fa-brands fa-pinterest"></i>
        {/* <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GoogleIcon />
        <PinterestIcon /> */}
      </div>
    </div>
  </div>
  )
}

export default Contact