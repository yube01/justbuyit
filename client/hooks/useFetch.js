import { useEffect, useState } from "react"

const useFetch = async(url)=>{


    const [data,setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const res = await axios.get( `http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`,{
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

}