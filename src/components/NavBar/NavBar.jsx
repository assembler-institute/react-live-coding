import { memo, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/login">Login</Link> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Zapateando
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/checkout"
            >
              Checkout
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/profile"
            >
              {user?.name}
            </NavLink>
            <button
              className="btn btn-dark ml-2"
              type="submit"
              onClick={() => setUser({ name: "Lidia" })}
            >
              Login
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default memo(NavBar);
