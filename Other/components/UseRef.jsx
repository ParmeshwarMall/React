import React,{useRef, useState} from 'react'

const Counter2 = () => {
    let timeRef=useRef(null)
    const [count,setCount]=useState(0);

    const start=()=>{
        timeRef.current=setInterval(()=>{
            setCount(prev=>prev+1);
        },1000);
    }

    const stop=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;
    }

    const reset=()=>{
        clearInterval(timeRef.current);
        setCount(0);
        timeRef.current=null;
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter2
