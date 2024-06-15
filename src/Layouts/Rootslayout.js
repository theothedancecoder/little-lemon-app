import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import About from "../Pages/About";

const Rootslayout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

export default Rootslayout;
