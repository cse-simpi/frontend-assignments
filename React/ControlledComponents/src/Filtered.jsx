import React, { useState } from 'react'

const Filtered = () => {
    const [category,setCategory] = useState("")
    let products = [
        {id : 1,name : "laptop", category : "electronics"},
        {id : 2,name : "Shirt" , category : "fashion"},
        {id : 3,name : "mobile", category : "electronics"}
    ]

    let filteredData = products.filter((product)=> product.category.includes(category.toLowerCase()))
    const handleChange = (e)=>{    
        setCategory(e.target.value);
    }
    
  return (
    <div>
        <h1>Products</h1>
        <input type = "text" value = {category} onChange={handleChange}></input>
      {
        filteredData ? filteredData.map((data)=>{
            return <li key = {data.id}> {data.name} {data.category}</li>
        }) : <h1>No data found</h1>
        
      }
    </div>
  )
}

export default Filtered
