import { fetchAPI } from "./api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.times;
    default:
      return state;
  }
};
