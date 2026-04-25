import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginData,setLoginData] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()
    const handleLogin = (e)=>{

    }

    const handleRegister= ()=>{
        navigate("/register")
    }
  return (
     <div>
      <form action="">
        <label htmlFor='email'>Enter Email</label>
        <input type="email" name="" id="email" />
        <br />
        <label htmlFor="password">Enter password</label>
        <input type="password" name="" id="password" />
        <br />
        <button type='submit'>Submit</button>
      </form>
        <p>Not registered yet ? Click to Register</p>
        <button onClick={handleRegister}>Register</button>

    </div>
  )
}

export default Login
