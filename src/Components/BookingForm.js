import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "date") {
      updateTimes(value); // Update available times based on selected date
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData); // Call the submitForm function passed via props
    console.log("Form data submitted", formData);
  };

  return (
    <section className="form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Reservation Form</legend>
          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="res-time">Reserve Time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <button type="submit">Make Reservation</button>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
