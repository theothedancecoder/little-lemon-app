import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, onSubmit }) => {
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
      onSubmit(formData);
    }
  };

  const validateForm = () => {
    // Validation logic
    // Example validation rules for demonstration purposes
    return true; // Replace with actual validation logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required // HTML5 required attribute
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required // HTML5 required attribute
        />
      </div>
      <div>
        <label>Party Size:</label>
        <input
          type="number"
          name="partySize"
          value={formData.partySize}
          onChange={handleChange}
          required // HTML5 required attribute
          min="1" // Minimum party size
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="selectedDate"
          value={formData.selectedDate}
          onChange={handleChange}
          required // HTML5 required attribute
        />
      </div>
      <div>
        <label>Time:</label>
        <select
          name="selectedTime"
          value={formData.selectedTime}
          onChange={handleChange}
          required // HTML5 required attribute
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
