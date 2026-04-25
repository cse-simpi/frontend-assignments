import React, { useEffect } from 'react'

const Child = () => {
    useEffect(()=>{
        console.log("I am useEffect");
        const interval = setInterval(()=>{
            console.log("I am working so hard ");
            
        },2000)
        return ()=>{
            clearInterval(interval)
            console.log("I am unmounting");
            
        }
    })
  return (
    <div>
      <h1>I am child component</h1>
    </div>
  )
}

export default Child
