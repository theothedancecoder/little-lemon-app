import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, submitForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    partySize: "",
    selectedDate: "",
    selectedTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("on validate click");
      submitForm(formData);
    }
  };

  const validateForm = () => {
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formToFill">
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-labelledby="nameLabel"
        />
      </div>
      <div className="formToFill">
        <label htmlFor="emailInput">Email:</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-labelledby="emailLabel"
        />
      </div>
      <div className="formToFill">
        <label htmlFor="partySizeInput">Party Size:</label>
        <input
          type="number"
          id="partySizeInput"
          name="partySize"
          value={formData.partySize}
          onChange={handleChange}
          required
          min="1"
          aria-labelledby="partySizeLabel"
        />
      </div>
      <div className="formToFill">
        <label htmlFor="dateInput">Date:</label>
        <input
          type="date"
          id="dateInput"
          name="selectedDate"
          value={formData.selectedDate}
          onChange={handleChange}
          required
          aria-labelledby="dateLabel"
        />
      </div>
      <div className="formToFill">
        <label htmlFor="timeSelect">Time:</label>
        <select
          id="timeSelect"
          name="selectedTime"
          value={formData.selectedTime}
          onChange={handleChange}
          required
          aria-labelledby="timeLabel"
        >
          <option value="">Select Time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
