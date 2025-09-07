// Activity 2: Operators and Control Flow
console.log("=== Activity 2: Operators and Control Flow ===");

// Part A: Arithmetic Operators
console.log("\n=== ARITHMETIC OPERATORS ===");
let a = 15;
let b = 4;
console.log(`a = ${a}, b = ${b}`);
console.log(`Addition (a + b): ${a + b}`);
console.log(`Subtraction (a - b): ${a - b}`);
console.log(`Multiplication (a * b): ${a * b}`);
console.log(`Division (a / b): ${a / b}`);
console.log(`Modulus (a % b): ${a % b}`);
console.log("\nOperator Precedence:");
console.log(`2 + 3 * 4 = ${2 + 3 * 4} (multiplication first)`);
console.log(`(2 + 3) * 4 = ${(2 + 3) * 4} (parentheses first)`);

// Part B: Comparison Operators
console.log("\n=== COMPARISON OPERATORS ===");
let x = 5;
let y = "5";
let z = 10;
console.log(`x = ${x} (number), y = "${y}" (string), z = ${z}`);
console.log(`x == y: ${x == y} (loose equality)`);
console.log(`x === y: ${x === y} (strict equality)`);
console.log(`x != y: ${x != y} (loose inequality)`);
console.log(`x !== y: ${x !== y} (strict inequality)`);
console.log(`x > z: ${x > z}`);
console.log(`x < z: ${x < z}`);
console.log(`x >= 5: ${x >= 5}`);
console.log(`x <= 5: ${x <= 5}`);

// Part C: Logical Operators
console.log("\n=== LOGICAL OPERATORS ===");
let isAdult = true;
let hasLicense = false;
let age = 20;
console.log(`isAdult = ${isAdult}, hasLicense = ${hasLicense}, age = ${age}`);
console.log(`isAdult && hasLicense: ${isAdult && hasLicense}`);
console.log(`isAdult || hasLicense: ${isAdult || hasLicense}`);
console.log(`!hasLicense: ${!hasLicense}`);
console.log(`age >= 18 && age < 65: ${age >= 18 && age < 65}`);

// Part D: Conditional Statements
console.log("\n=== CONDITIONAL STATEMENTS ===");
let score = 85;
console.log(`Score: ${score}`);
if (score >= 90) {
  console.log("Grade: A - Excellent!");
} else if (score >= 80) {
  console.log("Grade: B - Good job!");
} else {
  console.log("Grade: C or lower");
}

// Part E: Switch Statement
console.log("\n=== SWITCH STATEMENT ===");
let dayOfWeek = 3;
switch (dayOfWeek) {
  case 0: console.log("Sunday"); break;
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day"); break;
}

// Part F: Age Checker Application
function checkAge() {
  const ageInput = document.getElementById("ageInput");
  const resultDiv = document.getElementById("result");
  const inputValue = ageInput.value.trim();

  resultDiv.className = ""; // clear old styles

  if (inputValue === "") {
    resultDiv.textContent = "Please enter your age";
    resultDiv.className = "invalid";
    return;
  }

  const age = Number(inputValue);
  if (isNaN(age)) {
    resultDiv.textContent = "Invalid age - please enter a number";
    resultDiv.className = "invalid";
    return;
  }

  if (age < 0 || age > 150) {
    resultDiv.textContent = "Invalid age - please enter a realistic age (0-150)";
    resultDiv.className = "invalid";
    return;
  }

  if (age >= 18) {
    resultDiv.textContent = `You are ${age} years old - You are an adult`;
    resultDiv.className = "adult";
  } else {
    resultDiv.textContent = `You are ${age} years old - You are a minor`;
    resultDiv.className = "minor";
  }
}

// Add note on page
document.getElementById("output").innerHTML =
  "<h3>Check the console for operator demonstrations!</h3>";
