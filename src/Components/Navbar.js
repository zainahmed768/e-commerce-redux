import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", alignItems: "space-between" }}>
      <span className="logo">Redux Store</span>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/cart">
        Cart
      </Link>
      <span className="cartCount">0</span>
    </div>
  );
};

export default Navbar;
