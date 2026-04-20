import React, { useState } from 'react'

//using array in state
const User = () => {
    let users = ["abc","xyz"]
    let [name,setName] = useState(users);
    console.log(name);
    
    const handleClick = ()=>{
        setName([...name,"new user"])
    }
  return (
    <div>
      <ul>
        {
            name.map((item,idx)=>(
                <li key = {idx}>{item}</li>
            ))
        }
      </ul>
      <button onClick={handleClick}>Set User</button>
    </div>
  )
}

export default User
