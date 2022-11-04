import { useContext } from "react";
import { UserContext } from "../components/context/UserContext";
import NavBar from "../components/NavBar/NavBar";
import { ProductsContainer } from "../components/Products";

const HomeView = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <NavBar />
      <h2>Welcome back, {user?.name}</h2>
      <ProductsContainer />
    </>
  );
};

export default HomeView;
