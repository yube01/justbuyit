
import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

const useFetch = (url)=>{
    const [ data, setData] = useState([])
    const [error , setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
            setLoading(true)
          const res = await makeRequest.get(url)
            setData(res.data.data)
          
        } catch (error) {
          setError(true)
        }
        setLoading(false)
      }
      fetchData()
    },[url])

    return{data,error,loading}
}

export default useFetch