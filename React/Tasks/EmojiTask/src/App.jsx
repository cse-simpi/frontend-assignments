import React from 'react'
import Background from './Background'

const App = () => {
  const modes = ["angry","calm","happy","sleepy"]
  const colors = ["red","blue","yellow","black"]
  return (
    <div>
      <Background modes = {modes} colors = {colors}/>
    </div>
  )
}

export default App
