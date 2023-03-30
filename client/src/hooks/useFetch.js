import axios from "axios"
import { useState } from "react"

const useFetch = async(url)=>{
    const [ data, setData] = useState(null)
    const [error , setError] = useState(false)
    const [loading, setLoading] = useState(false)

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
}