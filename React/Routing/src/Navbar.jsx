import React from 'react'
import { Link, NavLink } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const navbar = () => {
  return (
    <div>
        {/* <nav>
        <Link to = "/" element = <Home/> > Home</Link>
      <Link to = "/about" element = <About/> >About</Link>
      <Link to = "/contact" element = <Contact/> > Contact </Link>
        </nav> */}
      <nav>
        <NavLink to = "/">Home |</NavLink>
        <NavLink to = "/about">About |</NavLink>
        <NavLink to = "/contact">Contact |</NavLink>
      </nav>
    </div>
  )
}

export default navbar
