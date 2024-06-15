import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.jpg";

const Nav = () => {
  return (
    <div className="container">
      <div className="left-side">
        <img id="logo" src={Logo} alt="little-lemon logo"></img>{" "}
      </div>
      <div className="right-side">
        <Link>
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Menu">Menu</Link>
            </li>
            <li>
              <Link to="Reservations">Reservations</Link>
            </li>
            <li>
              <Link to="OrderOnline">Order Online</Link>
            </li>
            <li>
              <Link to="Login">Login</Link>
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
