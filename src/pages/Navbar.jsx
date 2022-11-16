import React, { memo } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="mx-3" to="/">
        Home
      </Link>
      {" | "}
      <Link to="/shop"> Shop</Link>
    </div>
  );
};

export default memo(Navbar);
