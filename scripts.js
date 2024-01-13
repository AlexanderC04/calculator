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

let operate = (firstNum, secNum, operator) => {
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
};

let displayValue = document.querySelector(".calculator__display--value");
let displayOperator = document.querySelector(".calculator__display--operator");
let displayCurrent = document.querySelector(".calculator__display--current");
let keysClear = document.querySelector(".keys-all-clear");
let keysDelete = document.querySelector(".keys-delete");
let keysNumber = document.querySelectorAll(".keys-number");
let keysOperation = document.querySelectorAll(".keys-operation");
let keysEquals = document.querySelector(".keys-equals");

displayCurrent.textContent = null;
displayValue.textContent = null;
displayOperator.textContent = null;

let clearDisplay = () => {
  displayCurrent.textContent = null;
  displayValue.textContent = null;
  displayOperator.textContent = null;
};

keysDelete.addEventListener("click", function () {
  displayCurrent.textContent = displayCurrent.textContent.slice(0, -1);
});

keysClear.addEventListener("click", clearDisplay);

keysNumber.forEach((keyNumber) =>
  keyNumber.addEventListener("click", () => {
    displayCurrent.textContent += keyNumber.textContent;
    if (displayCurrent.textContent.length >= 13) {
      displayCurrent.textContent = Number(
        displayCurrent.textContent
      ).toExponential(2);
    }
  })
);

keysOperation.forEach((keyOperation) =>
  keyOperation.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
      displayValue.textContent = displayCurrent.textContent;
      displayOperator.textContent = keyOperation.textContent;
    } else if (displayValue.textContent.indexOf(" ") >= 0) {
      displayValue.textContent = displayCurrent.textContent;
      displayOperator.textContent = keyOperation.textContent;
    } else {
      let operationRound = operate(
        parseFloat(displayValue.textContent),
        parseFloat(displayCurrent.textContent),
        displayOperator.textContent
      );
      displayValue.textContent = Math.round(operationRound * 100) / 100;
      displayOperator.textContent = keyOperation.textContent;
    }
    if (displayValue.textContent.length >= 13) {
      displayValue.textContent = Number(displayValue.textContent).toExponential(
        2
      );
    }
    displayCurrent.textContent = null;
  })
);

keysEquals.addEventListener("click", function () {
  if (displayValue.textContent == 0) {
    displayValue.textContent = displayCurrent.textContent;
  } else if (displayValue.textContent.indexOf(" ") >= 0) {
    displayValue.textContent = displayCurrent.textContent;
    displayCurrent.textContent = null;
  } else {
    let displayOperation = `${displayValue.textContent} ${displayOperator.textContent} ${displayCurrent.textContent} `;
    displayValue.textContent = displayOperation;
    let operationRound = operate(
      parseFloat(displayValue.textContent),
      parseFloat(displayCurrent.textContent),
      displayOperator.textContent
    );
    displayCurrent.textContent = Math.round(operationRound * 100) / 100;
  }
  if (displayCurrent.textContent.length >= 13) {
    displayCurrent.textContent = Number(
      displayCurrent.textContent
    ).toExponential(2);
  }
  displayOperator.textContent = null;
});
