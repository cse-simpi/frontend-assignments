import React from 'react'
import Child from './Child';

const Parent = () => {
    const userName = "Simpi";
    const age = 20;
    let profile = "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg"
    let skilss = ['typescript',"react","JavaScript"]
  return (
    <div>
      <h1>Parent Component</h1>
      <p>UserName: {userName}</p>
     
      <Child userName = {userName} a = {age} prof = {profile} skills = {skilss}/>
    </div>
  )
}

export default Parent

