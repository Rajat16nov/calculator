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
    return calculatedValue;
  } else if (operator === "-") {
    calculatedValue = subtract(num1, num2);
    return calculatedValue;
  } else if (operator === "x") {
    calculatedValue = multiply(num1, num2);
    return calculatedValue;
  } else if (operator === "÷") {
    calculatedValue = divide(num1, num2);
    return calculatedValue;
  }
}
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "x", "÷"];
let earlyFlag = false;
const allButtons = document.querySelectorAll("button");

document.addEventListener("keydown", function (e) {
  if (
    e.key == "." ||
    (e.key >= 0 && e.key <= 9) ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "x" ||
    e.key == "/" ||
    e.key == "Enter"
  ) {
    e.preventDefault();
    let actual = e.key;
    if (actual === "/") {
      actual = "÷";
    } else if (actual == "Enter") {
      actual = "=";
    }
    const buttons = Array.from(document.querySelectorAll("button"));
    const targetButton = buttons.filter(
      (button) => button.textContent.trim() === actual
    );
    targetButton[0].click();
  }
});
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
      if (!num1 || !operator) {
        earlyFlag = true;
      }
      if (!earlyFlag) {
        num2 = parseFloat(display.textContent);
        if (num2 == "0" && operator == "÷") {
          display.textContent = "🙈";
        } else {
          display.textContent = operate(num1, num2, operator);
        }
      }
    } else if (e.target.textContent == "AC") {
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
        num1 = parseFloat(display.textContent);
      } else if (!num2) {
        num2 = parseFloat(display.textContent);
      }
      if (operator && num1 && num2) {
        num1 = operate(num1, num2, operator);
        display.textContent = num1;
        operator = e.target.textContent;
        num2 = "";
      }
    } else if (e.target.textContent == "+/-") {
      display.textContent = parseFloat(display.textContent) * -1;
    } else if (e.target.textContent == "%") {
      display.textContent = parseFloat(display.textContent) * 0.01;
    } else if (e.target.textContent == ".") {
      if (!display.textContent.includes(".")) {
        display.textContent += ".";
      }
    }
  });
});
