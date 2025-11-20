const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    console.log("Outer beforeEach: Creating calculator");
    calculator = new Calculator();
  });

  test("should initialize with zero", () => {
    expect(calculator.getResult()).toBe(0);
  });

  describe("Addition Operations", () => {
    beforeEach(() => {
      console.log("Inner beforeEach: Setting up for addition");
      calculator.add(10);
    });

    test("should add positive numbers", () => {
      calculator.add(5);
      expect(calculator.getResult()).toBe(15);
    });

    test("should add negative numbers", () => {
      calculator.add(-3);
      expect(calculator.getResult()).toBe(7);
    });
  });

  describe("Multiplication Operations", () => {
    beforeEach(() => {
      console.log("Inner beforeEach: Setting up for multiplication");
      calculator.add(5);
    });

    test("should multiply by positive number", () => {
      calculator.multiply(3);
      expect(calculator.getResult()).toBe(15);
    });

    test("should multiply by zero", () => {
      calculator.multiply(0);
      expect(calculator.getResult()).toBe(0);
    });
  });
});
