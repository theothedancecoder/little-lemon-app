import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import OrderOnline from "../Pages/OrderOnline";

const Rootslayout = () => {
  return (
    <div>
      <Nav />
      <About />
      <OrderOnline />
      <Menu />

      <Outlet />
    </div>
  );
};

export default Rootslayout;
