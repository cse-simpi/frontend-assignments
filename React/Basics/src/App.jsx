import React, { Fragment } from 'react'
import Footer,{ Helper } from './Footer'

const App = () => {
  const name = "Simpi"
  return (
    <Fragment>
    <div>
      <h1>Hello {name}</h1>
    </div>
    <Footer/>
    <Helper/>
    </Fragment>
  )
}

export default App
