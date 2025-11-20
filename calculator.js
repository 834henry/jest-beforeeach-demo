class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this.result;
  }

  subtract(num) {
    this.result -= num;
    return this.result;
  }

  multiply(num) {
    this.result *= num;
    return this.result;
  }

  reset() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
