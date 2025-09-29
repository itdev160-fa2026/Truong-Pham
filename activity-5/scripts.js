console.log("=== Activity 5: Simple Math Operations Widget ===");

// Select elements
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.getElementById("clear");
const resultDiv = document.getElementById("result");

// Log event details
function logEventDetails(event) {
  console.log("Event Details:");
  console.log("- Type:", event.type);
  console.log("- Target:", event.target);
  console.log("- Text:", event.target.textContent);
  console.log("- CurrentTarget:", event.currentTarget);
}

// Math operations
function addNumbers(a, b) { return a + b; }
function subtractNumbers(a, b) { return a - b; }
function multiplyNumbers(a, b) { return a * b; }
function divideNumbers(a, b) {
  if (b === 0) return "Error: Cannot divide by zero";
  return a / b;
}

// Validate input
function validateInputs() {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);

  if (isNaN(num1)) {
    showError("Please enter a valid first number");
    return null;
  }
  if (isNaN(num2)) {
    showError("Please enter a valid second number");
    return null;
  }
  return { num1, num2 };
}

function showResult(result) {
  resultDiv.textContent = `Result: ${result}`;
  resultDiv.className = "result success";
}

function showError(message) {
  resultDiv.textContent = message;
  resultDiv.className = "result error";
}

function clearAll() {
  number1Input.value = "";
  number2Input.value = "";
  resultDiv.textContent = "Result will appear here";
  resultDiv.className = "result";
}

// Handle operations
function handleOperationClick(event) {
  logEventDetails(event);

  const operation = event.target.dataset.operation;
  const inputs = validateInputs();
  if (!inputs) return;

  const { num1, num2 } = inputs;
  let result;
  switch (operation) {
    case "add": result = addNumbers(num1, num2); break;
    case "subtract": result = subtractNumbers(num1, num2); break;
    case "multiply": result = multiplyNumbers(num1, num2); break;
    case "divide": result = divideNumbers(num1, num2); break;
    default: result = "Unknown operation";
  }

  if (typeof result === "string" && result.startsWith("Error")) {
    showError(result);
  } else {
    showResult(result);
  }
}

// Event listeners
operationButtons.forEach(btn => btn.addEventListener("click", handleOperationClick));
clearButton.addEventListener("click", clearAll);

// Extra event feedback
number1Input.addEventListener("focus", e => e.target.style.backgroundColor = "#e3f2fd");
number1Input.addEventListener("blur", e => e.target.style.backgroundColor = "");
number2Input.addEventListener("focus", e => e.target.style.backgroundColor = "#e3f2fd");
number2Input.addEventListener("blur", e => e.target.style.backgroundColor = "");

operationButtons.forEach(btn => {
  btn.addEventListener("mouseover", e => console.log(`Mouse over ${e.target.textContent}`));
  btn.addEventListener("mouseout", e => console.log(`Mouse out ${e.target.textContent}`));
});

// Output demo
document.getElementById("output").innerHTML = `
  <h3>Event Handling Demo Loaded!</h3>
  <p>✓ addEventListener() used for all interactions</p>
  <p>✓ Input validation and error handling implemented</p>
  <p>✓ Mouse and focus events demonstrate different event types</p>
  <p>Check the console for detailed event logging!</p>
`;
