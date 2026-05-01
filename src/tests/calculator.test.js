const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

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

  test("routes modulo operator", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("routes power operator", () => {
    expect(calculate(2, "^", 3)).toBe(8);
  });

  test("routes sqrt operator", () => {
    expect(calculate(16, "sqrt", 0)).toBe(4);
  });

  test("throws error for unknown operator", () => {
    expect(() => calculate(5, "&", 2)).toThrow("Unknown operator");
  });

  test("throws error for division by zero via calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero");
  });
});

// Tests based on image examples: 5 % 2, 2 ^ 3, √16
describe("Calculator - Extended Operations Image Examples", () => {
  test("modulo with 5 % 2 = 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("power with 2 ^ 3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("square root with √16 = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });
});

// Modulo tests
describe("Modulo", () => {
  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("handles negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("handles negative divisor", () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test("handles decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("modulo of zero by a number returns zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("throws error on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });

  test("throws error on modulo by zero with negative dividend", () => {
    expect(() => modulo(-5, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// Exponentiation (power) tests
describe("Power", () => {
  test("raises a number to a positive exponent", () => {
    expect(power(2, 8)).toBe(256);
  });

  test("raises a number to the power of zero", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises a number to the power of one", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("raises a number to a negative exponent", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("raises zero to a positive exponent", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("handles negative base with even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-3, 3)).toBe(-27);
  });

  test("handles decimal exponent", () => {
    expect(power(4, 0.5)).toBe(2);
  });
});

// Square root tests
describe("Square Root", () => {
  test("returns square root of a perfect square", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("returns square root of 16", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of 25", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("returns square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns square root of 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("returns square root of non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns square root of a decimal", () => {
    expect(squareRoot(0.25)).toBe(0.5);
  });

  test("returns square root of a large number", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  test("throws error for negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws error for negative decimal", () => {
    expect(() => squareRoot(-0.5)).toThrow("Square root of a negative number is not allowed.");
  });
});
