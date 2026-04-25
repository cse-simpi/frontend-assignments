import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
      <Link to ="profile">Profile</Link>
      <Link to = "setting">Setting</Link>
      </nav>
        <Outlet/>
    </div>
  )
}

export default Dashboard
