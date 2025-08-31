// Part 1: Console Hello World
console.log("Hello, World!");

// Part 2: Webpage Hello World
document.getElementById("output").innerText = "Hello, World!";

// Part 3: Variable Declarations
let studentName = "Truong Nguyen Nhat Pham";  // string
const age = 22;                        // number (const)
let isStudent = true;                  // boolean
let emptyValue = null;                 // null
let notAssigned;                       // undefined

// Part 4: Console Output
console.log("=== Variable Values ===");
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Empty Value:", emptyValue);
console.log("Not Assigned:", notAssigned);

console.log("=== Variable Types ===");
console.log("typeof studentName:", typeof studentName);
console.log("typeof age:", typeof age);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof emptyValue:", typeof emptyValue);
console.log("typeof notAssigned:", typeof notAssigned);

// Part 5: Variable Reassignment
console.log("=== Variable Reassignment ===");
console.log("Original studentName:", studentName);
studentName = "Alex Johnson";
console.log("Updated studentName:", studentName);

// Thử thay đổi const -> sẽ báo lỗi trong console
// age = 25;  // Uncomment để thấy lỗi
