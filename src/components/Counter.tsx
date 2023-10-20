import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //increase
  const increase = () => {
    setCount((count) => count + 1);
  };
  //decrease
  const decrease = () => {
    setCount((count) => count - 1);
  };
  //reset
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
