import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from './User';

const Users = () => {
    const [users,setUsers] = useState([]);

    const getUsers = async()=>{
        try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = response.data;
        setUsers(data);
        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getUsers()
    },[])
   
     
  return (
    <div>
      <h1>Users</h1>
      <div>
        {
            users && users.map((user)=>{
                return <User key = {user.id} user = {user}/>
            })
        }
      </div>
    </div>
  )
}

export default Users
