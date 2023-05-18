import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNav = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-blue-600" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveNav;
