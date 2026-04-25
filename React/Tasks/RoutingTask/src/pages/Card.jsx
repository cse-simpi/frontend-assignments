import React from 'react'

const Card = ({data}) => {
  return (
    <div className='container'>
      <h1>{data.firstName}</h1>
      <h1>{data.lastName}</h1>
      <p>{data.age}</p>
      <p>{data.gender}</p>
    </div>
  )
}

export default Card
