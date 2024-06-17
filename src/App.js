import React, { useReducer } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";
import Rootslayout from "./Layouts/Rootslayout";
import BookingForm from "./Components/BookingForm";
import ConfirmedBooking from "./Components/ConfirmedBooking"; // Import ConfirmedBooking component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={Rootslayout}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="reservations" element={<Reservations />} />
      <Route path="OrderOnline" element={<OrderOnline />} />
      <Route path="Login" element={<Login />} />
      <Route path="confirmed-booking" element={<ConfirmedBooking />} /> {}
    </Route>
  )
);

function App() {
  // Example state for availableTimes
  const [availableTimes, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_TIMES":
          return action.times;
        default:
          return state;
      }
    },
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] // Initial state with example times
  );

  const updateTimes = (selectedDate) => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    dispatch({ type: "SET_TIMES", times });
  };

  // Function to handle form submission
  const submitForm = async (formData) => {
    try {
      const success = true;
      if (success) {
        window.location.href = "/confirmed-booking";
      } else {
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <RouterProvider router={router}>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm} // Pass submitForm function to BookingForm component
      />
    </RouterProvider>
  );
}

export default App;
