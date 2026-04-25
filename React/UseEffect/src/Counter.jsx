import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0);
    console.log("component mounted");
    
    useEffect(()=>{
        alert("hello useEffect")
        
    },[])

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
    </div>
  )
}

export default Counter
