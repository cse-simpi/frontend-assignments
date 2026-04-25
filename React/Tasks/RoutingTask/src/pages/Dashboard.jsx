import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div>
       <Navbar/>
       <main>
        <Outlet/>
       </main>

    </div>

  )
}

export default Dashboard
