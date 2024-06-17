import React from "react";
import { render } from "@testing-library/react";
import BookingForm from "../src/Components/BookingForm";

describe("BookingForm HTML5 Validation Attributes", () => {
  const mockAvailableTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];

  it("should have required attribute for Time select", () => {
    const { getByLabelText } = render(
      <BookingForm availableTimes={mockAvailableTimes} />
    );
    const timeSelect = getByLabelText("Time");
    expect(timeSelect).toHaveAttribute("required");
  });
});
