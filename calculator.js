"use strict";
// Variables for calculator elements
const calculatorContainer = document.getElementById("calculator-container");
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const resultContainer = document.getElementById("result");
const calculationResult = document.getElementById("calculation-result");

function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

subtractButton.addEventListener("click", function () {
  const number1 = parseFloat(number1Input.value) || 0;
  const number2 = parseFloat(number2Input.value) || 0;
  const result = subtract(number1, number2);
  calculationResult.textContent = result;
});
