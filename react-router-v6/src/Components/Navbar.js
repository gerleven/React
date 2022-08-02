import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const id = 10;

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
        {/* En el className de Link no solo podemos pasarle un string, no acepta funciones como NavLink */}
      <Link className="active" to={`/about/${id + 1}`}>
        go to about/11
      </Link>
    </>
  );
};

export default Navbar;
