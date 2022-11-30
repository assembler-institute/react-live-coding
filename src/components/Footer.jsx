import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <footer>{counter}</footer>
    </>
  );
};

export default Footer;
