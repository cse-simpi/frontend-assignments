import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const registeredUsers = [];
    const [registerData,setRegisterData] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleChange = (e)=>{
        const {value,name} = e.target;

        setRegisterData({...registerData,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users"));
        registeredUsers = [...users,registerData]
        users = JSON.stringify(registeredUsers);
        localStorage.setItem("users",users)
        
        navigate("/login");
    }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name = "name" onChange={handleChange} value = {registerData.name}/>
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onChange={handleChange} value = {registerData.email}/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" onChange={handleChange} value = {registerData.password}/>
        <br/>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Register
