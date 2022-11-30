import React from "react";
import { useDispatch } from "react-redux";

import { increaseCounter, decreaseCounter } from "../redux/counter/actions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Header</h2>
      <button onClick={() => dispatch(increaseCounter())}>+1</button>
      <button onClick={() => dispatch(decreaseCounter())}>-1</button>
    </>
  );
};

export default Header;
