import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const App = () => {



  const router = createBrowserRouter([
    {
      path:"/",
      element:<span>Home</span>

    },
    {
      path:"/products/:id",
      element:<span>category</span>
    },
    {
      path:"/product/:id",
      element:<span>product</span>
    }
  ])

  return (
    <div>

      <RouterProvider router={router}/>

    </div>
  )
}

export default App