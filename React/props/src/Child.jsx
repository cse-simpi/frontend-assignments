import React from 'react'

const Child = (prop) => {
    console.log(prop);
    let {userName,a,prof,skills} = prop;
    
    //props is a read only property
    //prop.userName = "xyz"
  return (
    <div>
      <h1>Child Component</h1>
      <p>UserName : {prop.userName}</p>
      <p>{userName}</p>
      <p>{a}</p>
      <img src = {prof} style={{width:"100px"}}></img>
      <ul>
      {
        skills.map((skill,id)=>
          <li key={id}>{skill}</li>
        )
      }
      </ul>
    </div>
  )
}

export default Child
