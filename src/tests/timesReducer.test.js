import { initializeTimes, updateTimes } from "../timesReducer";
import { fetchAPI } from "../api";

jest.mock("../api"); // Mock fetchAPI function

describe("updateTimes function", () => {
  it("updates the availableTimes state with provided times", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const selectedDate = "2024-06-20"; // Example selected date
    const mockTimes = ["09:00", "10:00", "11:00"];
    const action = { type: "SET_TIMES", times: mockTimes };
    fetchAPI.mockResolvedValue(mockTimes);

    const updatedState = updateTimes(currentState, {
      ...action,
      date: selectedDate,
    });
    expect(updatedState).toEqual(mockTimes);
  });

  it("returns the current state when action type is unknown", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN_ACTION" };

    const updatedState = updateTimes(currentState, action);
    expect(updatedState).toEqual(currentState);
  });
});
