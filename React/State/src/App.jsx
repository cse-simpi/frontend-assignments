import React, { useState } from 'react'
import User from './User'
import UserDetails from './UserDetails'
import Data from './Data'

const App = () => {
  // const [state,setState] = useState(0)
  // console.log(state);
  
  // set state calls for re-renders and causes infinite loop 
  //setState(5)
  // let [count,setCount] = useState(0);
  // const increment = ()=>{
  //   // setCount(count+1)
  //   // setCount(count+1)
  //   // setCount(count+1)
  //   // setCount(count=count + 1);
  //   // setCount(count=count + 1);
  //   // setCount(count=count + 1);
  //   console.log("hello");
    
  // }
  // const decrement = ()=>{
    
  //   setCount(count > 0 ? count -1 : count);
  // }

  // const reset = ()=>{
  //   setCount(0);
  // }
  return (
    <div>
      {/* <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
      {/* <User/> */}
      {/* <UserDetails/> */}
      <Data/>
    </div>
  )
}

export default App
