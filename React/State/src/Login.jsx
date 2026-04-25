import React, { useState } from 'react'

//short circuiting
const Login = () => {
    const [role,setRole] = useState("guest")
  return (
    <div>
      <button onClick={()=>setRole("guest")}>Guest</button>
      <button onClick={()=>setRole("user")}>User</button>
      <button onClick={()=>setRole("admin")}>Admin</button>
      {
        role === "guest" && <h1>You are Guest. Soon you have to make your account</h1>
      }
      {
        role === "user" && <h1>You are user.Browse carefully</h1>
      }
      {
        role == "admin" && <h1>You are admin. You have all the privileges.</h1>
      }
    </div>
  )
}

export default Login
