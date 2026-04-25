import React from 'react'
import GrandChild from './GrandChild'

const Child = ({name}) => {
  return (
    <div>
      <GrandChild name = {name}/>
    </div>
  )
}

export default Child
