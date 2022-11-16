import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductView from "../pages/ProductView";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path=":id" element={<ProductView />}></Route>
          </Route>
          {/*    <Route path="/shop/:id" element={<ProductView/>} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
