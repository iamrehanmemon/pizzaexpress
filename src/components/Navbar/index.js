import React from "react";
// import { NavLink } from "react-router-dom";
import { Nav, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
