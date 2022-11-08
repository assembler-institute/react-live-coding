import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      text="text"
      className="form-control-lg"
      placeholder="Enter your name"
    />
  );
});

export default Input;
