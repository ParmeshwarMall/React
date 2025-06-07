import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const res = () => {
    setCount(0);
  };



  return (
    <div>
      <h1>Time: {count}</h1>
      <button onClick={res}>Reset</button>
    </div>
  );
};

export default Counter;
