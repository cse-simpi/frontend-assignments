import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav>
      <Link to ="profile">Profile</Link>
      <Link to = "setting">Setting</Link>
      </nav>
  )
}

export default Navbar
