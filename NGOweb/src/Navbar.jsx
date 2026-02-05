import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/donate">Donate</NavLink>
      <NavLink to="/impactStories">Impact Stories</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <span
        onClick={handleLogout}
        style={{
          color: "black",
          cursor: "pointer",
          padding: "5px",
          backgroundColor: "#cadbd9ff",
          borderRadius: "10px",
          position: "absolute",
          right: "20px",
        }}
      >
        Logout
      </span>
    </nav>
  );
}

export default Navbar;
