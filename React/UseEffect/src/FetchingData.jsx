import React, { useEffect, useState } from 'react'
import Card from './Card'

const FetchingData = () => {

    const [count,setCount] = useState(0)
    const [data,setData] = useState([])
    useEffect(()=>{

        const fetchUsers = async ()=>
        {
        try{
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setData(data)
        console.log(data);
        }catch(error){
            console.log("Error: ", error);
            
        }
    }
    fetchUsers()
        
    },[])
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={()=> setCount((count)=>count+1)}>Increment</button> */}
      <div>
      {
        data && data.map((user)=>
            <Card key = {user.id} user = {user}/>
        )
      }
      </div>
    </div>
  )
}

export default FetchingData
