import { useState } from "react";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const increaseValue = () => {
    setCounter(counter + 1);
  };

  const substractValue = () => {
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter((value = 0));
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={increaseValue}>+</button>
      <button onClick={resetValue}>C</button>
      <button disabled={counter <= 0} onClick={substractValue}>
        -
      </button>
    </>
  );
};

export default CounterApp;
