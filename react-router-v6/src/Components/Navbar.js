import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/users"
      >
        Users -{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/about"
      >
        About -{" "}
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home -{" "}
      </NavLink>
    </>
  );
};

export default Navbar;
