var runningInput = '';
var tempInput = 0;
var runningTotal = 0;
var tempOperator = '';
var total = document.querySelector('.total');
var answer = document.querySelector('.answer');
const numbers = [0,1,2,3,4,5,6,7,8,9];
const operators = ['+', '-', '/', '*'];

function add(num1, num2) {
  return num1 + num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function clearInput() {
  runningInput = '';
  tempInput = 0;
  runningTotal = 0;
  tempOperator = '';
  total.textContent = '';
  answer.textContent = '';
}

function addButtonListeners(calcButtons) {
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", function(event) {
      var inner = event.target.innerHTML;
      if (numbers.includes(Number(inner)) || inner === '.') {
        runningInput += inner;
        total.textContent = runningInput;
      } else if (operators.includes(inner)) {
        if (runningTotal !== 0) {
          tempInput = runningTotal;
        } else {
          tempInput = Number(runningInput);
        }
        runningInput = '';
        total.textContent = runningInput;
        tempOperator = inner;
      } else if (inner === '=') {
        if (tempOperator === '+') {
          runningTotal = add(tempInput, Number(runningInput));
        } else if (tempOperator === '-') {
          runningTotal = subtract(tempInput, Number(runningInput));
        } else if (tempOperator === '/') {
          runningTotal = divide(tempInput, Number(runningInput));
        } else {
          runningTotal = multiply(tempInput, Number(runningInput));
        }
        total.textContent = runningTotal;
        tempOperator = '';
      } else if (inner === 'CLR') {
        clearInput();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var calcButtons = document.body.getElementsByClassName("button");
  addButtonListeners(calcButtons);
});