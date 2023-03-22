import React from 'react'
import "./feature.scss"
import Card from '../card/Card'
const Feature = ({type}) => {
    const data = [
        {
            id:1,
            img1:"",
            img2:"",
            title:"",
            isNew:true,
            oldPrice:14,
            price:30
        },
        {
            id:1,
            img1:"",
            img2:"",
            title:"",
            isNew:true,
            oldPrice:14,
            price:30
        },
        {
            id:1,
            img1:"",
            img2:"",
            title:"",
            isNew:true,
            oldPrice:14,
            price:30
        },
        {
            id:1,
            img1:"",
            img2:"",
            title:"",
            isNew:true,
            oldPrice:14,
            price:30
        }


    ]
  return (
    <div className="feature">
         <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {
           data.map((item) =>
            <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Feature