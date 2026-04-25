import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = () => {
    const {id} = useParams()
    const [data,setData] = useState("");

    const getData = async ()=>{
        try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = response.data;

        setData(data)
        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(
        ()=>{
            getData()
          
        },[]
    )
  return (
    <div>
      <h1>Title : {data.title}</h1>
      <p>{data.body}</p>
      <Link to ="/">GO back</Link>
    </div>
  )
}

export default Post
