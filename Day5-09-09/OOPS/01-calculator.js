class Calculator {
  constructor(_number1, _number2) {
    this.number1 = _number1;
    this.number2 = _number2;
  }

  addition() {
    return this.number1 + this.number2;
  }

  subtraction() {
    return this.number1 - this.number2;
  }

  multiplication() {
    return this.number1 * this.number2;
  }

  division() {
    return this.number1 / this.number2;
  }
}

let op = new Calculator(1, 2);
console.log(op.addition());
console.log(op.subtraction());
console.log(op.multiplication());
console.log(op.division());
