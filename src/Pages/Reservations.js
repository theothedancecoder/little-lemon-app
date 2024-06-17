// src/Pages/Reservations.js
import React, { useReducer, useEffect } from "react";

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

  return (
    <div>
      <h1>Make a Reservation</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Reservations;
