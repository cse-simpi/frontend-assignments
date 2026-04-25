import React from 'react'
import { Route, Routes } from 'react-router'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
import Dashboard from './nestedPages/Dashboard'
import Profile from './nestedPages/Profile'
import Setting from './nestedPages/Setting'
import Home from './nestedPages/Home'

const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "*" element = {<PageNotFound/>}/>
      </Routes> */}

      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path='/dashboard' element = {<Dashboard/>} > 

        <Route path='profile' element = {<Profile/>}/>
        <Route path='setting' element = {<Setting/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
