import React, { useEffect, useState } from 'react'
import "./feature.scss"
import Card from '../card/Card'
import axios from "axios"
const Feature = ({type}) => {
   

    const [ data, setData] = useState([])

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const res = await axios.get( "http://localhost:1337/api/products",{
            headers:{
              Authorization: "bearer" + "1559c3970bce0c42dcbeff8ed45cf0e1cd8b3772db90ea7c0aa3c45d3ec38e9fd86c742a2c57efb56c98ab851b32cd1b5e99aba982b7890dbe7f09838ad0aa6b57165f66cd0e758ba5130b73867ecfb6d1a15f81cd3aee8e335d825e56540bc89d1e2a3e28f2db3e9a6ce16aab1cd64025ebae16bb94ffb7b0780f47faa68866"
            }
            
          })
            setData(res.data.data)
          
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    },[])


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