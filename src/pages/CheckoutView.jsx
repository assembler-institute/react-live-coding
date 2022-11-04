import React from "react";
import { useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import { UserContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";

const CheckoutView = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <h2>Welcome back, {user?.name}</h2>
      <Checkout />
    </>
  );
};

export default CheckoutView;
