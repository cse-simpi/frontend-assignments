import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [id,setId] = useState("")
  return (
    <div>
        <h1>Welcome</h1>
        <label htmlFor="id">Enter the id: </label>
        <input type="tel" id = "id" value = {id} onChange={(e)=>setId(e.target.value)}></input>
      <nav>
        <Link to = {`/user/${id}`}>Go to User {id}</Link>
      
      </nav>
    </div>
  )
}

export default Home
