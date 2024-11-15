function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(firstNum, secNum, operator) {
  switch (operator) {
    case "+":
      return add(firstNum, secNum);
    case "−":
      return subtract(firstNum, secNum);
    case "×":
      return multiply(firstNum, secNum);
    case "÷":
      return divide(firstNum, secNum);
  }
}

function clearDisplay() {
  oldValue.textContent = null;
  operator.textContent = null;
  currentValue.textContent = null;
}

function deleteNumber() {
  currentValue.textContent = currentValue.textContent.slice(0, -1);
}

function displayNumber(numberPressed) {
  currentValue.textContent += numberPressed.target.textContent;
  if (currentValue.textContent.length >= 13) {
    currentValue.textContent = Number(currentValue.textContent).toExponential(
      2
    );
  }
}

function startOperation(operatorPressed) {
  if (oldValue.textContent == "") {
    oldValue.textContent = currentValue.textContent;
    operator.textContent = operatorPressed.target.textContent;
  } else {
    let result = operate(
      parseFloat(oldValue.textContent),
      parseFloat(currentValue.textContent),
      operator.textContent
    );
    oldValue.textContent = Math.round(result * 100) / 100;
    operator.textContent = operatorPressed.target.textContent;
  }
  if (oldValue.textContent.length >= 13) {
    oldValue.textContent = Number(oldValue.textContent).toExponential(2);
  }
  currentValue.textContent = null;
}

function getResult() {
  if (oldValue.textContent == "") {
    oldValue.textContent = currentValue.textContent;
  } else {
    let displayOperation = `${oldValue.textContent} ${operator.textContent} ${currentValue.textContent} `;
    oldValue.textContent = displayOperation;
    let result = operate(
      parseFloat(oldValue.textContent),
      parseFloat(currentValue.textContent),
      operator.textContent
    );
    currentValue.textContent = Math.round(result * 100) / 100;
  }
  if (currentValue.textContent.length >= 13) {
    currentValue.textContent = Number(currentValue.textContent).toExponential(
      2
    );
  }
  operator.textContent = null;
}

let oldValue = document.querySelector(".calculator__display--old-value");
let operator = document.querySelector(".calculator__display--operator");
let currentValue = document.querySelector(
  ".calculator__display--current-value"
);
let keysClear = document.querySelector(".keys-clear-all");
let keysDelete = document.querySelector(".keys-delete");
let keysNumber = document.querySelectorAll(".keys-number");
let keysOperation = document.querySelectorAll(".keys-operation");
let keysEqual = document.querySelector(".keys-equal");

oldValue.textContent = null;
operator.textContent = null;
currentValue.textContent = null;

keysDelete.addEventListener("click", deleteNumber);
keysClear.addEventListener("click", clearDisplay);

keysNumber.forEach((keyNumber) =>
  keyNumber.addEventListener("click", displayNumber)
);

keysOperation.forEach((keyOperation) =>
  keyOperation.addEventListener("click", startOperation)
);
keysEqual.addEventListener("click", getResult);
