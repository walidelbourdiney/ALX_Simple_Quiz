"use strict";

// Variables for HTML elements
const body = document.querySelector("body");
const quizContainer = document.querySelector("#quiz-container");
const quizQuestion = document.querySelector("#quiz-question");
const radioInputs = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll("label");
const submitAnswerButton = document.querySelector("#submit-answer");
const feedback = document.querySelector("#feedback");

submitAnswerButton.addEventListener("click", checkAnswer);

// Define the checkAnswer function
function checkAnswer() {
  // Step 1: Identify the correct answer
  const correctAnswer = "4";

  // Step 2: Retrieve the user's answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = selectedOption ? selectedOption.value : null;

  // Step 3: Compare the user's answer with the correct answer
  const feedbackElement = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
  }
}
