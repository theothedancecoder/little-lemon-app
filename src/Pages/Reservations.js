import React, { useReducer, useEffect } from "react";
import "./Reservation.css";

import { initializeTimes, updateTimes } from "../timesReducer";
import BookingForm from "../Components/BookingForm";

const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  useEffect(() => {
    const today = new Date();
    dispatch({ type: "INITIALIZE_TIMES", date: today });
  }, []);

  const submitForm = async (formData) => {
    console.log("submit form", formData);
    try {
      const success = false;
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
    <div>
      <h1 className="reserve">Make a Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Reservations;
