import React from 'react'

const FoodCart = (prop) => {
    console.log(prop);
    const {menu} = prop
    
  return (
    <div>
      <h1>Food Cart</h1>
      <div className="container" style={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap",gap:"15px"}}>
        {
            menu.map((item)=>(
                <div className="card" key={item.id} style={{backgroundColor:"#1e1d21", padding:"20px",width:"200px",borderRadius:"10px",display:"flex",flexDirection:"column",gap:"10px"}}>
                    <div className="img-container" style={{width:"200px",height:"200px"}}>
                        <img src = {item.image} width= "200px" height="200px"></img>
                    </div>
                    <div className="menu-details" style={{color:"white", backgroundColor:"#575353",padding:"2px 8px",borderRadius:"10px"}}>
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default FoodCart
