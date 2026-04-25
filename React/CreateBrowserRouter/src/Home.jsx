import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
      <Link to ="/about">About </Link>
      <Link to = "dashboard">Dashboard</Link>
      </nav>
      <hr>
      </hr>
      <Outlet/>
    </div>
  )
}

export default Home
