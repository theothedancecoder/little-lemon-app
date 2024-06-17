import { initializeTimes, updateTimes } from "./timesReducer";

describe("initializeTimes function", () => {
  it("returns the initial array of time strings", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const actualTimes = initializeTimes();
    expect(actualTimes).toEqual(expectedTimes);
  });
});

describe("updateTimes function", () => {
  it("updates the availableTimes state with provided times", () => {
    const currentState = [];
    const action = { type: "SET_TIMES", times: ["09:00", "10:00", "11:00"] };
    const updatedState = updateTimes(currentState, action);
    expect(updatedState).toEqual(["09:00", "10:00", "11:00"]);
  });

  it("returns the current state when action type is unknown", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN_ACTION" };
    const updatedState = updateTimes(currentState, action);
    expect(updatedState).toEqual(currentState);
  });
});
