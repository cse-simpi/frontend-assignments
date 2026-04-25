import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

const userRoutes = createBrowserRouter([
  {
    path:"/",
    element : <Home/>
  },
  {
    path: "/user/:id",
    element: <User/>
  }
])
const App = () => {
  return (
    <RouterProvider router={userRoutes}>
      
    </RouterProvider>
  )
}

export default App
