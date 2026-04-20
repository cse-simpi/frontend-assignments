import React, { useState } from 'react'

//using null and ternary operators
const Data = () => {
    const [data,setData] = useState(56)
    console.log(data);
    const handleClick = ()=>{
        setData("i am here");

        setData=90;
    }
    
  return (
    <div>
      {
        data ?
        <h1>{data}</h1>:
        <h1>No data found</h1>
      }

      <button onClick={handleClick}>Load Data</button>
    </div>
  )
}

export default Data
