import React, { useEffect, useState } from 'react'
import "./feature.scss"
import Card from '../card/Card'
import axios from "axios"
const Feature = ({type}) => {
    const data = [
        {
            id:1,
            img1:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            img2:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"blue",
            isNew:true,
            oldPrice:14,
            price:40
        },
        {
            id:1,
            img1:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            img2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            title:"green",
            isNew:false,
            oldPrice:19,
            price:30
        },
        {
            id:1,
            img1:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80",
            img2:"https://images.unsplash.com/photo-1493704099487-36e3c0412f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
            title:"yellow",
            isNew:false,
            oldPrice:12,
            price:38
        },
        {
            id:1,
            img1:"https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            img2:"https://images.unsplash.com/photo-1654806389957-f8ca19bb7b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"white",
            isNew:false,
            oldPrice:149,
            price:100
        }


    ]

    const [ products, setProducts] = useState([])

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const data = await axios.get( "http://localhost:1337/api/products",{
            headers:{
              Authorization: "bearer" + "1559c3970bce0c42dcbeff8ed45cf0e1cd8b3772db90ea7c0aa3c45d3ec38e9fd86c742a2c57efb56c98ab851b32cd1b5e99aba982b7890dbe7f09838ad0aa6b57165f66cd0e758ba5130b73867ecfb6d1a15f81cd3aee8e335d825e56540bc89d1e2a3e28f2db3e9a6ce16aab1cd64025ebae16bb94ffb7b0780f47faa68866"
            }
            
          })
          console.log(data)
          
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