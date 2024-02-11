function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1, num2, operator;

function operate(num1, num2, operator) {
  if (operator === "+") {
    sum(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "x") {
    multiply(num1, num2);
  } else if (operator === "÷") {
    divide(num1, num2);
  }
}
