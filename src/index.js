import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { NotFoundPage } from "./Pages/NotFoundPage";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";
import Rootslayout from "./Layouts/Rootslayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootslayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "reservations", element: <Reservations /> },
      { path: "orderonline", element: <OrderOnline /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
