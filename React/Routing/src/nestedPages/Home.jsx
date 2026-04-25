import React from 'react'
import Dashboard from './Dashboard'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to ="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Home
