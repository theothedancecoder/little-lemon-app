import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import OrderOnline from "../Pages/OrderOnline";
import Reservations from "../Pages/Reservations";

const Rootslayout = () => {
  return (
    <div>
      <Nav />
      <About />
      <OrderOnline />
      <Menu />
      <Reservations />

      <Outlet />
    </div>
  );
};

export default Rootslayout;
