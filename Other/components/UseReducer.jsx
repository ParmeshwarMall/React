import React, { useReducer, useState } from 'react'

const UseReducer = () => {

    const reducer=(state,action)=>{
        if(action.type==="inc")
        {
            return state+1;
        }
        if(action.type==="dec")
        {
            return state-1;
        }
    }

    const [count,dispatch]=useReducer(reducer,0);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={()=>dispatch({type:"inc"})}>Increament</button>
      <button onClick={()=>dispatch({type:"dec"})}>Decreament</button>
    </div>
  )
}

export default UseReducer
