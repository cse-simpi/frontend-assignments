import React from 'react'
import Parent from './pages/Parent'

//grand child should be inside child component and child should be in parent because if we have more child
// we cannot put every child in app. also due to layout, example you are making sidebar and inside it a small div is there you cannot
// put this div outside in app component because it will break the flow.
const App = () => {
  const name = "Rishi"
  return (
    <div>
      <Parent name = {name}/>
    </div>
  )
}

export default App
