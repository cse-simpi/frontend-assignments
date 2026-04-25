import React from 'react'
import Dashboard from './Dashboard'
import Users from './Users'
import Settings from './Settings'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <aside>
        <div>
            <Link to ="dashboard">Dashboard</Link>
            <Link to = "users">Users</Link>
            <Link to = "setting">Setting</Link>
        </div>
      </aside>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Home
