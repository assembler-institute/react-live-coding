import React, { useState } from "react";

const useCounter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  const increaseValue = (value = 1) => {
    setCounter(counter + value);
  };

  const substractValue = (value = 1) => {
    if (counter === 0) return initialValue;
    else setCounter(counter - value);
  };

  const resetValue = (value = 0) => {
    setCounter(value);
  };
  return {
    counter,
    increaseValue,
    substractValue,
    resetValue,
  };
};

export default useCounter;
