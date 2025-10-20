// ===============================================
// Activity 6 - Function and Scope Demonstrations
// ===============================================

// --- Function Declaration ---
function greetUser(name) {
    return `Hello, ${name}! Welcome to Activity 6!`;
  }
  console.log(greetUser("Truong"));
  
  // --- Function Expression ---
  const addNumbers = function (a, b) {
    return a + b;
  };
  console.log("Sum (Function Expression):", addNumbers(5, 3));
  
  // --- Arrow Function ---
  const multiplyNumbers = (a, b) => a * b;
  console.log("Product (Arrow Function):", multiplyNumbers(4, 6));
  
  // --- Nested Functions Example ---
  function outerFunction() {
    console.log("Inside outerFunction");
  
    function innerFunction() {
      console.log("Inside innerFunction");
    }
  
    innerFunction();
  }
  outerFunction();
  
  // --- Global and Local Scope ---
  let globalMessage = "This is a global variable";
  
  function showScope() {
    let localMessage = "This is a local variable";
    console.log(globalMessage); // accessible
    console.log(localMessage);  // accessible only inside function
  }
  showScope();
  
  // Trying to access local variable outside (will cause error)
  try {
    console.log(localMessage); // ReferenceError
  } catch (error) {
    console.log("Cannot access 'localMessage' outside its scope.");
  }
  
  // --- Block Scope Example ---
  if (true) {
    let blockScoped = "I'm inside this block only";
    console.log(blockScoped);
  }
  try {
    console.log(blockScoped);
  } catch {
    console.log("Cannot access 'blockScoped' outside the block.");
  }
  
  // --- Default Parameter Function ---
  function greetUserDefault(name = "Guest") {
    return `Welcome, ${name}!`;
  }
  console.log(greetUserDefault());
  console.log(greetUserDefault("Thu"));
  
  // --- Function Returning Another Function ---
  function createMultiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log("Double of 5:", double(5));
  console.log("Triple of 5:", triple(5));
  
  console.log("=== End of demos.js ===");
  