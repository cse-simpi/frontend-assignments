import React, { useState } from 'react'

const Background = ({ modes, colors}) => {
    const [red,blue,yellow,black] = colors
    const [color,setColor] = useState("white")
    const [angry,calm,happy,sleepy] = modes;

    const handleClick = (mode)=>{
        mode == angry ? setColor(red):
        mode == calm ? setColor(blue):
        mode == happy ? setColor(yellow):
        mode == sleepy ? setColor(black) :
        console.log("no color set")
    }
  return (
    <div style = {{
        width: "100vw",
        height: "100vh",
        backgroundColor : color
    }}>
      <button onClick = {()=>handleClick(angry)}>😡</button>
      <button onClick={()=>handleClick(calm)}>😇</button>
      <button onClick={()=>handleClick(happy)}>😊</button>
      <button onClick={()=>handleClick(sleepy)}>😴</button>
    </div>
  )
}

export default Background
