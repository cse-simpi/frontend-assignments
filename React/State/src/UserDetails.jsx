import React, {useState} from 'react'

// using object in state
const UserDetails = () => {
    let [user,setUser] = useState(
        {
            userName : "simpi",
            marks : 0
        }
    )
    console.log(user);
    
    let updateMarks = ()=>{
        setUser({...user, marks : user.marks + 10})
    }
  return (
    <div>
      <h1>{user.userName} {user.marks}</h1>
      <button onClick={updateMarks}> Update Marks</button>
    </div>
  )
}

export default UserDetails
