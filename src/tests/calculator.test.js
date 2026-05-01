const { add, subtract, multiply, divide, calculate } = require("../calculator");

// Tests based on image examples: 2+3, 10-4, 45*2, 20/5
describe("Calculator - Image Examples", () => {
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });
});

// Addition tests
describe("Addition", () => {
  test("adds two positive numbers", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("adds negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("adds a positive and negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds zero", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// Subtraction tests
describe("Subtraction", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test("subtracts resulting in negative", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract(7, 0)).toBe(7);
  });

  test("subtracts from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// Multiplication tests
describe("Multiplication", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies positive by negative", () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test("multiplies by one", () => {
    expect(multiply(99, 1)).toBe(99);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// Division tests
describe("Division", () => {
  test("divides two positive numbers evenly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides with decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides positive by negative", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws error on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws error on division by zero with negative numerator", () => {
    expect(() => divide(-5, 0)).toThrow("Division by zero is not allowed.");
  });
});

// calculate() function tests
describe("Calculate (operator routing)", () => {
  test("routes addition operator", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("routes subtraction operator", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("routes multiplication operator", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("routes division operator", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws error for unknown operator", () => {
    expect(() => calculate(5, "%", 2)).toThrow("Unknown operator");
  });

  test("throws error for division by zero via calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero");
  });
});
