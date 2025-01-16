# Project Overview

This repository contains two simple HTML applications demonstrating fundamental concepts in JavaScript, including event handling and DOM manipulation.

---

## File Descriptions

### 1. Quiz Application

**Description:**
This is a basic quiz application that presents a single-question multiple-choice quiz. Users select an answer and submit it to check if it is correct.

**HTML Structure:**

- A container for the quiz with the ID `quiz-container`.
- A question displayed in an element with the ID `quiz-question`.
- Multiple radio button options for answers, each grouped under the `name="quiz"` attribute.
- A button with the ID `submit-answer` for submitting the answer.
- A feedback area with the ID `feedback` to display results.

**JavaScript Functionality:**

- Identifies the correct answer ("4").
- Retrieves the user’s selected answer using `document.querySelector`.
- Compares the user’s answer with the correct one and displays feedback in the `feedback` element.
- Includes an event listener to handle the button click and invoke the checking logic.

---

### 2. Calculator Application

**Description:**
This is a simple calculator that allows users to perform basic arithmetic operations: addition, subtraction, multiplication, and division.

**HTML Structure:**

- A container for the calculator with the ID `calculator-container`.
- Two input fields for entering numbers (`id="number1"` and `id="number2"`).
- Four buttons for operations (`id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`).
- A result display area within a `div` with the ID `result`, which includes a span to show the calculation result (`id="calculation-result"`).

**JavaScript Functionality:**

- Retrieves values entered in the input fields and performs calculations based on the clicked operation button.
- Updates the result area with the computed value.

---

## Usage

1. **Quiz Application:**

   - Open the HTML file in a web browser.
   - Select an answer to the quiz question.
   - Click the "Submit Answer" button to check your response and view feedback.

2. **Calculator Application:**
   - Open the HTML file in a web browser.
   - Enter two numbers in the input fields.
   - Click any operation button to perform the calculation.
   - View the result in the designated area.

---

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling the user interface.
- **JavaScript**: For implementing interactivity and logic.

---
