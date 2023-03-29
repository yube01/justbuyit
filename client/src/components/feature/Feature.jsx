import React, { useEffect, useState } from 'react'
import "./feature.scss"
import Card from '../card/Card'
import axios from "axios"
const Feature = ({type}) => {
   

    const [ data, setData] = useState([])

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const res = await axios.get( process.env.BACKEND_TOKEN +`/products?populate=*&[filters][type][$eq]=${type}`,{
            headers:{
              Authorization: "bearer" + process.env.STRAPI_TOKEN
            }
            
          })
            setData(res.data.data)
          
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    },[])

    console.log(data)


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