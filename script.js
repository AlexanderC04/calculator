let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};
let divide = (a, b) => {
  return a / b;
};

console.log(add(-30, 5));
console.log(subtract(10, 50));
console.log(multiply(10, -9));
console.log(divide(10, 95));

let operate = (firstNum, secNum, operator) => {
  switch (operator) {
    case "+":
      add(firstNum, secNum);
      break;
    case "-":
      add(firstNum, secNum);

      break;
    case "*":
      add(firstNum, secNum);

      break;
    case "/":
      add(firstNum, secNum);

      break;
  }
};
