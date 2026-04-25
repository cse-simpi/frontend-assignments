import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Post from './pages/Post'
import Home from './pages/Home'

const App = () => {

  const userRoutes = createBrowserRouter([
    {
      path: "/",
      element : <Home/>,
      children : [
        {
          path : "post/:id",
          element: <Post/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router = {userRoutes}></RouterProvider>
    
  )
}

export default App
