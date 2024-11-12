import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/transactions">Transactions</NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar-button-container">
        <button className="btn">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
