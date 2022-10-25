import { useState } from "react";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  console.log(setCounter);

  return <div>{counter}</div>;
};

export default CounterApp;
