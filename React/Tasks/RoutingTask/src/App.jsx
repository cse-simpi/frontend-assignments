import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>}>
        <Route path = "profile" element = {<Profile/>}></Route>
        <Route path = "setting" element = {<Setting/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
