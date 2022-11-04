import { Routes, Route, Link } from "react-router-dom";
// import { ProductsContainer } from "../components/Products";
// import Checkout from "../components/Checkout/Checkout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeView from "../pages/HomeView";
import CheckoutView from "../pages/CheckoutView";
import LoginView from "../pages/LoginView";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/checkout" element={<CheckoutView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  );
};

export default Router;
