import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';

const AxiosUse = () => {

    const [data,setData] = useState([])
    // const getData = ()=>{
    //     axios.get("https://fakestoreapi.com/products/").then((response)=> setData(response.data)).catch((err)=>console.log(err));
        
    // }

    const getData = async()=>{
        try{
        const response = await axios.get("https://fakestoreapi.com/products/")
        setData(response.data)
        }catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      {
        data && data.map((d)=>
            <Card key = {d.id} user = {d}/>
        )
      }
    </div>
  )
}

export default AxiosUse
