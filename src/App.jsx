import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./page/home/Home"
import Products from "./page/products/Products"
import Product from "./page/product/Product"
const App = () => {



  const router = createBrowserRouter([
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
  ])

  return (
    <div>

      <RouterProvider router={router}/>

    </div>
  )
}

export default App