const display = document.getElementById('display');

let operation = {
  operand1: null,
  operator: null,
  operand2: null
};

function addNumber(number) {
  if (operation.operator === null) {
    operation.operand1 = (operation.operand1 || '') + number;
  } else {
    operation.operand2 = (operation.operand2 || '') + number;
  }
  display.value = operation.operand1 || operation.operand2 || '0';
}

function handleOperator(newOperator) {
  operation.operator = newOperator;
}

function performOperation(operand1, operator, operand2) {
  if (operator === '+') {
    return operand1 + operand2;
  } else if (operator === '-') {
    return operand1 - operand2;
  } else if (operator === '*') {
    return operand1 * operand2;
  } else if (operator === '/') {
    return operand1 / operand2;
  } else if (operator === '√') {
    return Math.sqrt(operand1);
  } else if (operator === '^') {
    return Math.pow(operand1, operand2);
  }
}

function calculateResult() {
  let result = performOperation(operation.operand1, operation.operator, operation.operand2);
  operation.operand1 = result;
  operation.operator = null;
  operation.operand2 = null;
  display.value = result;
}
