const Calculator = require("./calculator");

describe("Calculator Tests", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add numbers correctly", () => {
    calculator.add(5);
    calculator.add(3);
    expect(calculator.getResult()).toBe(8);
  });

  test("should subtract numbers correctly", () => {
    calculator.add(10);
    calculator.subtract(4);
    expect(calculator.getResult()).toBe(6);
  });

  test("should multiply numbers correctly", () => {
    calculator.add(5);
    calculator.multiply(3);
    expect(calculator.getResult()).toBe(15);
  });

  test("should start with zero result", () => {
    expect(calculator.getResult()).toBe(0);
  });
});
