import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    const [id,setId] = useState("")

  return (
    <div>
        <label htmlFor='id'>Enter id: </label>
      <input type="tel" id = "id" value={id} onChange = {(e)=>setId(e.target.value)}></input>
      <nav>
        <Link to = {`post/${id}`}>GO to post {id} </Link>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Home
