import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Contact from './Contact'

let routing = createBrowserRouter(
  [
    {
      path : "/",
      element : <Home/>,
      children :[
        {
          path : "dashboard",
          element : <Dashboard/>,
          children: [
        {
          path: "profile",
          element : <Profile/>
        },
        {
          path : "contact",
          element : <Contact/>
        }
      ]
        }
      ]
    },
    {
      path : "/about",
      element : <About/>
    }
    
  ]
)
const App = () => {
  return (
    <RouterProvider router = {routing}>
      <div>
        App
      </div>
    </RouterProvider>
  )
}

export default App
