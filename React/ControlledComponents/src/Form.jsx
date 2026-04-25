import React, { useState } from 'react'

const Form = () => {
  const [data, setData] = useState(
    {
      userName: "",
      password: "",
      gender: "",
      skills : [],
      city: "",
      message : ""
    }
  )

  //const [skills, setSkills] = useState([])
  const handleChange = (e) => {

    const { name, value } = e.target;

    setData(
      {
        ...data, [name]: value
      }
    )
  }
  const handleChecked = (e) => {
    console.log(e);

    const { checked, value } = e.target;

    setData({...data , skills : checked ? [...data.skills,value] : data.skills.filter((skill)=> skill != value)})
    // if (checked == true) {
    //   setSkills([...skills, value]);

    // } else {
    //   setSkills(skills.filter((skill) => skill !== value))
    // }
  }


  return (
    <div>
      <form action="">
        <input type="text" name="userName" value={data.userName} onChange={handleChange} placeholder='Enter your name' />
        <br />
        <br />
        <input type="text" name="password" value={data.password} onChange={handleChange} placeholder='Enter your password' />
        <br />
        <br />
        Male :
        <input type="radio" name="gender" onChange={handleChange} value="Male" />
        Female :
        <input type="radio" name="gender" onChange={handleChange} value="Female" />
        <br />
        <br />
        HTML : <input type="checkbox" name="skills" value="HTML" onChange={handleChecked} />
        CSS : <input type="checkbox" name="skills" value="CSS" onChange={handleChecked} />
        <br />
        <br />
        <select name="city" id="" onChange={handleChange} value={data.city}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <textarea name = "message" onChange={handleChange} value = {data.message}></textarea>
      </form>
      <h1>Username : {data.userName}</h1>
      <h1>Password : {data.password}</h1>
      <h1>Gender : {data.gender}</h1>
      <h1>Skills : {data.skills}</h1>
      <h1>City : {data.city}</h1>
      <h1>Message : {data.message}</h1>
    </div>
  )
}

export default Form
