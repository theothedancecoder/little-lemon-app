import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingForm from "../Components/BookingForm";

// Mock availableTimes
const mockAvailableTimes = ["10:00 AM", "12:00 PM", "2:00 PM"];

describe("BookingForm", () => {
  test("renders all form fields correctly", () => {
    const { getByLabelText } = render(
      <BookingForm availableTimes={mockAvailableTimes} />
    );

    expect(getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(getByLabelText(/Party Size:/i)).toBeInTheDocument();
    expect(getByLabelText(/Date:/i)).toBeInTheDocument();
    expect(getByLabelText(/Time:/i)).toBeInTheDocument();
  });

  test("form submission with valid data", () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} onSubmit={mockSubmit} />
    );

    fireEvent.change(getByLabelText(/Name:/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(/Email:/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(getByLabelText(/Party Size:/i), {
      target: { value: "4" },
    });
    fireEvent.change(getByLabelText(/Date:/i), {
      target: { value: "2024-06-18" },
    });
    fireEvent.change(getByLabelText(/Time:/i), {
      target: { value: "12:00 PM" },
    });

    fireEvent.click(getByText(/Submit/i));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john.doe@example.com",
      partySize: "4",
      selectedDate: "2024-06-18",
      selectedTime: "12:00 PM",
    });
  });

  test("form submission with invalid data", () => {
    const mockSubmit = jest.fn();
    const { getByText } = render(
      <BookingForm availableTimes={mockAvailableTimes} onSubmit={mockSubmit} />
    );

    fireEvent.click(getByText(/Submit/i));

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
