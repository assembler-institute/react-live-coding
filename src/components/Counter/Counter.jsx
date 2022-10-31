import React, { useState, useMemo } from "react";

const highCostFunction = (number) => {
  console.log("high cost function");
  for (let i = 0; i < 700000; i++) {
    number += 1;
  }
  return number;
};

const Counter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  const calculus = useMemo(() => highCostFunction(counter), [counter]);

  // useEffect(highCostFunction(counter), [counter]);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };
  return (
    <>
      <h2>Counter</h2>
      <div>{counter}</div>
      <button onClick={increment}>Increment</button>
      <p>{calculus}</p>
    </>
  );
};

export default Counter;
