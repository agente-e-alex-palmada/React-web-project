import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavButton.css";

const NavButton = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-button ${isActive ? "nav-button--active" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavButton;
