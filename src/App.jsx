import React from 'react'
import { RouterProvider, createBrowserRouter ,Outlet} from 'react-router-dom'
import Home from "./page/home/Home"
import Products from "./page/products/Products"
import Product from "./page/product/Product"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import "./app.scss"


const App = () => {


  const Layout = ()=>{
    return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </div>
    )
  }



  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/products/:id",
          element:<Products/>
        },
        {
          path:"/product/:id",
          element:<Product/>
        }
      ]

    }
  ])

  return (
    <div>

      <RouterProvider router={router}/>

    </div>
  )
}

export default App