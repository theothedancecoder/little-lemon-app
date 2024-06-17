import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.jpg";

const Nav = () => {
  return (
    <div className="container">
      <div className="left-side">
        <img id="logo" src={Logo} alt="little-lemon logo" />
      </div>
      <div className="right-side">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
