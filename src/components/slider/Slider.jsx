import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {

    const slider=[
        {
            img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:""
        },
        {
            img:"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:""
        },
        {
            img:"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:""
        }
    ]

  return (
    <div className="slider">
         <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >

{slider.map(sliderImg=>(
                
                  <img src={sliderImg.img} alt="" />
                  
            
                
                
            ))}


                

    </Carousel>
    </div>
  )
}

export default Slider