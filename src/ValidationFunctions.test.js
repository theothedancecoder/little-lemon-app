import { validateEmail, validatePartySize } from "../src/utils/Validation";

describe("JavaScript Validation Functions", () => {
  it("validateEmail should return true for a valid email", () => {
    const validEmail = "test@example.com";
    const isValid = validateEmail(validEmail);
    expect(isValid).toBe(true);
  });

  it("validateEmail should return false for an invalid email", () => {
    const invalidEmail = "invalid-email";
    const isValid = validateEmail(invalidEmail);
    expect(isValid).toBe(false);
  });

  it("validatePartySize should return true for a valid party size", () => {
    const validPartySize = "5";
    const isValid = validatePartySize(validPartySize);
    expect(isValid).toBe(true);
  });

  it("validatePartySize should return false for an invalid party size", () => {
    const invalidPartySize = "0";
    const isValid = validatePartySize(invalidPartySize);
    expect(isValid).toBe(false);
  });

  // Add more tests for other validation functions as needed
});
