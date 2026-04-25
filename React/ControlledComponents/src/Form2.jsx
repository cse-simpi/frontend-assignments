import React, { useState } from 'react'
import style from "./Form2.module.css"

const Form2 = () => {
    const [formData,setFormData] = useState(
        {
            name : "",
            graduated : "",
            hoobies : [],
            country : "",
            message : ""
        }
    )

    const handleFormData = (e)=>{
        const {value,name} = e.target;

        setFormData({...formData, [name] : value})
    }

    const handleHobbies = (e)=>{
        const {checked, value} = e.target;
        console.log(checked);
        console.log(value);
        
        
        setFormData({
            ...formData, hoobies : checked ? [...formData.hoobies, value] : formData.hoobies.filter((hobby)=> hobby != value)
        })
    }
  return (
    <div>
        <fieldset>
            <legend>Know about you</legend>
        <form action="">
            <div className="detail">
        <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" value = {formData.name} onChange = {handleFormData}/>
</div>
<div style={style}>
      <label htmlFor="">Graduated</label>
      <label htmlFor="yes">Yes</label>
      <input type="radio" name="graduated" id="yes" value = "Yes" onChange = {handleFormData}/>
      <label htmlFor="no">No</label>
      <input type="radio" name="graduated" id="no" value = "No" onChange = {handleFormData}/>
</div>
<div style={style}>
        <label htmlFor="hobbies">Hobbies</label>

      Cooking:<input type="checkbox" name="hobbies" id="hobbies" value = "cooking" onChange = {handleHobbies}/>
      Drawing:<input type="checkbox" name="hobbies" id="hobbies" value = "drawing" onChange = {handleHobbies}/>
</div>
<div style={style}>
      <select name="country" id="" onChange = {handleFormData}>
        <option value="india">India</option>
        <option value="sri lanka">Sri Lanka</option>
        <option value="pakistan">Pakistan</option>
      </select>
</div>
<div style={style}>

<label htmlFor="message">Message</label>
       <textarea name="message" id="message" value = {formData.message} onChange = {handleFormData}>Message</textarea>
       </div>
        </form>
        </fieldset>
        <p>Name : {formData.name}</p>
        <p>Country: {formData.country}</p>
        <p>Graduated: {formData.graduated}</p>
        <p>Hobbies: {formData.hoobies}</p>
        <p>Message: {formData.message}</p>
    </div>
  )
}

export default Form2
