import React, { useReducer } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Rootslayout from "./Layouts/Rootslayout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import { NotFoundPage } from "./Pages/NotFoundPage";
import Reservations from "./Pages/Reservations";

function App() {
  const [availableTimes, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_TIMES":
          return action.times;
        default:
          return state;
      }
    },
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  );

  const updateTimes = (selectedDate) => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    dispatch({ type: "SET_TIMES", times });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootslayout />,

      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "menu", element: <Menu /> },
        { path: "reservations", element: <Reservations /> },
        { path: "Order-Online", element: <NotFoundPage /> },
        { path: "login", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    /*<BookingForm
      availableTimes={availableTimes}
      updateTimes={updateTimes}
      submitForm={submitForm}
    />*/

    <RouterProvider router={router} />
  );
}

export default App;
