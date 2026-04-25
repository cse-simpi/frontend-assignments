import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './auth/Home'
import Login from './auth/Login'
import Dashboard from './auth/Dashboard'
import Protect from './auth/Protect'

let routes = createBrowserRouter([{
  path : "/",
  element : <Home/>
},
{
  path : "/login",
  element : <Login/>
},
{
  path : "/dashboard",
  element : <Protect>
    <Dashboard/>
  </Protect>
}
])
const App = () => {
  return (
    <RouterProvider router = {routes}>

    </RouterProvider>
    
  )
}

export default App
