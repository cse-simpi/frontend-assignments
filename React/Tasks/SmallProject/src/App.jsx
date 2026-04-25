import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  const routes = createBrowserRouter([
    {
      path : "/",
      element : <Home/>,
      children :[
        {
          path : "dashboard",
          element : <Dashboard/>
        },
        {
          path : "users",
          element : <Users/>
        },
        {
          path : "setting",
          element : <Settings/>
        },
        {
          path : 'login',
          element : <Login/>
        },
        {
          path : "register",
          element : <Register/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
