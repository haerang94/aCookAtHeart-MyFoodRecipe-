import React from "react";
import "./Nav";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    fontSize: "1.8rem",
  };

  return (
    <nav>
      <Link to="/home" style={navStyle}>
        <h2 style={{ fontSize: "2rem" }}>A cook At Heart</h2>
      </Link>
      <ul className="nav-ul">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
        <Link to="Detail" style={navStyle}>
          <li>Detail</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
