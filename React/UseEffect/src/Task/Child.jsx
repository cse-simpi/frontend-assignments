import React, { useEffect, useState } from 'react'
import Card from '../Card';

const Child = () => {
    const [data,setData] = useState([]);

    const fetchData = async ()=>{
        try{
        const response = await fetch("https://fakestoreapi.com/products/")
        const data = await response.json();
        console.log(data)
        setData(data)
        }catch(error){
            console.log("Error : " , error);
            
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      {
        data && data.map((d)=>{
           return <Card key = {d.id} user = {d}/>
        })
      }
    </div>
  )
}

export default Child
