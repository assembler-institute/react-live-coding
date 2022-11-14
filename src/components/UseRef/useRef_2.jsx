import React, { useState, useEffect, useRef } from "react";

const useRef_2 = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);
  const renderedRef = useRef(initialValue);

  const handleAdd = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    renderedRef.current = counter;
    setTimeout(() => {
      // console.log(`useState value ${counter}`);
      // console.log(`useRef value ${renderedRef.current}`);
    }, 2000);
  }, [counter]);

  return (
    <>
      <h2>Cycle Rendering State vs useRef</h2>
      <p>useState: {counter}</p>
      <p>useRef: {renderedRef.current}</p>
      <button className="btn btn-primary" onClick={handleAdd}>
        +1
      </button>
    </>
  );
};

export default useRef_2;
