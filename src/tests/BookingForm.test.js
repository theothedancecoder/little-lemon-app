import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingForm from "../Components/BookingForm"; // Adjust the import path as needed

// Mock availableTimes
const mockAvailableTimes = ["10:00 AM", "12:00 PM", "2:00 PM"];

describe("BookingForm", () => {
  test("renders all form fields correctly", () => {
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} />
    );

    // Test rendering of form fields
    expect(getByLabelText(/Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Party Size/i)).toBeInTheDocument();
    expect(getByLabelText(/Date/i)).toBeInTheDocument();
    expect(getByLabelText(/Time/i)).toBeInTheDocument();

    // You can add more specific tests here as needed
  });

  test("form submission with valid data", () => {
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} />
    );

    // Fill out the form
    fireEvent.change(getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(/Email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(getByLabelText(/Party Size/i), { target: { value: "4" } });
    fireEvent.change(getByLabelText(/Date/i), {
      target: { value: "2024-06-18" },
    });
    fireEvent.change(getByLabelText(/Time/i), {
      target: { value: "12:00 PM" },
    });

    // Submit the form
    fireEvent.click(getByText(/Submit/i)); // Adjust the text as per your Submit button label

    // Add assertions here based on your form submission behavior
  });
});
