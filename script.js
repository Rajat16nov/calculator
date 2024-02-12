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
const displayValue = 0;
let calculatedValue = 0;

display = document.querySelector(".display");
display.textContent = displayValue;

function operate(num1, num2, operator) {
  if (operator === "+") {
    calculatedValue = sum(num1, num2);
    console.log(`${num1} + ${num2} = ${calculatedValue}`);
    return calculatedValue;
  } else if (operator === "-") {
    calculatedValue = subtract(num1, num2);
    console.log(`${num1} - ${num2} = ${calculatedValue}`);
    return calculatedValue;
  } else if (operator === "x") {
    calculatedValue = multiply(num1, num2);
    console.log(`${num1} x ${num2} = ${calculatedValue}`);
    return calculatedValue;
  } else if (operator === "÷") {
    console.log(`${num1} ÷ ${num2} = ${calculatedValue}`);
    calculatedValue = divide(num1, num2);
    return calculatedValue;
  }
}
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "x", "÷"];
let earlyFlag = false;
const allButtons = document.querySelectorAll("button");
allButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (numbers.includes(e.target.textContent)) {
      earlyFlag = false;
      if (display.textContent == "0") {
        display.textContent = e.target.textContent;
      } else if (num1 && display.textContent == num1.toString()) {
        display.textContent = e.target.textContent;
      } else if (num2 && display.textContent == num2.toString()) {
        display.textContent = e.target.textContent;
      } else {
        display.textContent += e.target.textContent;
      }
    } else if (e.target.textContent == "=") {
      console.log(earlyFlag);
      if (!earlyFlag) {
        num2 = parseInt(display.textContent);
        console.log("num2 is", num2);
        if (num2 == "0" && operator == "÷") {
          display.textContent = "🙈";
        } else {
          display.textContent = operate(num1, num2, operator);
        }
      }
    } else if (e.target.textContent == "Clear") {
      display.textContent = 0;
      operator = "";
      num1 = "";
      num2 = "";
    } else if (operators.includes(e.target.textContent)) {
      earlyFlag = true;
      if (!operator) {
        operator = e.target.textContent;
      }
      if (!num1) {
        num1 = parseInt(display.textContent);
        console.log("num1 is", num1);
      } else if (!num2) {
        num2 = parseInt(display.textContent);
        console.log("num2 is", num2);
      }
      if (operator && num1 && num2) {
        num1 = operate(num1, num2, operator);
        display.textContent = num1;
        operator = e.target.textContent;
        num2 = "";
      }
    }
  });
});
