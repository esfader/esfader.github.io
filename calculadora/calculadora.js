let calculation = '';

function addNumber(number) {
  const display = document.getElementById('display');
  display.value = display.value === '0' ? String(number) : display.value + number;
}

function calculateResult() {
  const display = document.getElementById('display');
  const result = document.querySelector('.result');
  calculation += display.value;
  display.value = eval(calculation);
  if (isNaN(display.value) || display.value === Infinity) {
    display.value = '0';
    calculation = '';
  }
  result.innerHTML = calculation + ' = ' + display.value;
  calculation = '';

  setTimeout(limpiarDisplay, 3000); // Ejecuta la función limpiarDisplay después de 3 segundos (3000 milisegundos)
}


function handleOperator(operator) {
  const display = document.getElementById('display');
  switch (operator) {
    case '+':
      calculation += display.value + operator;
      break;
    case '-':
      calculation += display.value + operator;
      break;
    case '*':
      calculation += display.value + '*';
      break;
    case '/':
      calculation += display.value + '/';
      break;
  }
  display.value = '0';
}

let resultadoAnterior = 0;

function calcularRaizCuadrada(operando) {
  return Math.sqrt(operando);
}
function calculateSquareRoot() {
  const display = document.getElementById('display');
  resultadoAnterior = calcularRaizCuadrada(display.value);
  display.value = resultadoAnterior;
}

function calcularPotencia(operando, exponente) {
  return Math.pow(operando, exponente);
}
function calculatePower() {
  const display = document.getElementById('display');
  const exponente = prompt("Ingrese el exponente:");
  resultadoAnterior = calcularPotencia(display.value, exponente);
  display.value = resultadoAnterior;
}


function limpiarDisplay() {
  const display = document.getElementById('display');
  display.value = '0';
}
