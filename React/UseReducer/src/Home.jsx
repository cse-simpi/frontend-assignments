import React, { useReducer } from 'react'
import { reducer } from './Reducer'

const Home = () => {
    let [state,dispatch] = useReducer(reducer,{count: 0});
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick = {()=>dispatch({type : 'increment'})}>Increment</button>
      <button onClick={()=> dispatch({type : 'decrement'})}>Decrement</button>
    </div>
  )
}

export default Home
