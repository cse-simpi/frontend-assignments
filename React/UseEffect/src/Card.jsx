import React from 'react'

const Card = ({user}) => {
  return (
    <div>
      <h1>{user.title}</h1>
      <p>{user.price}</p>
      <p>{user.description}</p>
      <p>{user.category}</p>
    </div>
  )
}

export default Card
