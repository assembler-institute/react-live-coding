import { useState } from "react";

const CounterApp = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  const increaseValue = () => {
    setCounter(counter + 1);
  };

  const substractValue = () => {
    if (counter === 0) return initialValue;
    else setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter((initialValue = 0));
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={increaseValue}>+</button>
      <button onClick={resetValue}>C</button>
      <button onClick={substractValue}>-</button>
      {/* <button disabled={counter <= 0} onClick={substractValue}>
        -
      </button> */}
    </>
  );
};

export default CounterApp;
