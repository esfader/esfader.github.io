const display = document.getElementById('display');

let operand1 = null;
let operator = null;
let operand2 = null;

function addNumber(number) {
  if (operand1 === null) {
    operand1 = number;
  } else if (operator === null) {
    operand1 = parseInt(`${operand1}${number}`);
  } else if (operand2 === null) {
    operand2 = number;
  } else {
    operand2 = parseInt(`${operand2}${number}`);
  }
  display.value = operand1 || operand2;
}

function handleOperator(newOperator) {
  operator = newOperator;
}

function calculateResult() {
  let result;
  if (operator === '+') {
    result = operand1 + operand2;
  } else if (operator === '-') {
    result = operand1 - operand2;
  } else if (operator === '*') {
    result = operand1 * operand2;
  } else if (operator === '/') {
    result = operand1 / operand2;
  } else if (operator === '√') {
    result = Math.sqrt(operand1);
  } else if (operator === '^') {
    result = Math.pow(operand1, operand2);
  }
  operand1 = result;
  operator = null;
  operand2 = null;
  display.value = result;
}
