import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';

const Profile = () => {
    const [data,setData] = useState([]);

    const getData = async ()=>{
        const response = await axios.get("https://dummyjson.com/users");
        const data = response.data;
        
        setData(data);
    }

    useEffect(()=>{
        getData()
    },[])
        console.log(data);

  return (
    <div>
      {
        data.users && data.users.map((d)=>
            <Card key = {d.id} data = {d}/>
        )
      }
    </div>
  )
}

export default Profile
