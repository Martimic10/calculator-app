const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      if (resultDisplayed) {
        currentInput = "";
        resultDisplayed = false;
      }
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

equalsBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
    resultDisplayed = true;
  } catch (error) {
    display.textContent = "Error";
  }
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.textContent = "0";
});