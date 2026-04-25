import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
    const [user,setUser] = useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>res.json())
        .then((data)=> setUser(data)).catch((err)=>console.log(err));
        
    },[])
   
    
  return (
    <div>
      {/* <h1>UserId: {id}</h1> */}
      {
        user && <h1>{user.name}</h1>
      }
    </div>
  )
}

export default User
