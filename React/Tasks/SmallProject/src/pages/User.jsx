import React from 'react'

const User = ({user}) => {
   

    const handleClick = ()=>{
        console.log(`user ${user.name} clicked`);
        
    }
  return (
    <div onClick = {handleClick}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default User
