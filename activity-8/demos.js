// Activity 8: Asynchronous JavaScript Demonstrations

console.log("=== Activity 8: Quote of the Day Generator ===");

// Part A: Asynchronous JavaScript Demonstrations
console.log("\n=== ASYNCHRONOUS JAVASCRIPT DEMONSTRATIONS ===");

// Demonstrate setTimeout
console.log("Starting setTimeout demonstrations...");
console.log("1. This logs immediately");

setTimeout(() => {
  console.log("3. This logs after 1 second (setTimeout)");
}, 1000);

console.log("2. This also logs immediately (before setTimeout callback)");

// Promise demo
console.log("\nPromise demonstration:");
const demoPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.3; // 70% success rate
  setTimeout(() => {
    success ? resolve("Promise resolved successfully!") : reject("Promise rejected!");
  }, 500);
});

demoPromise
  .then((res) => console.log("Promise success:", res))
  .catch((err) => console.log("Promise error:", err));

// Async/await demo
async function testAsyncAwait() {
  try {
    const res = await demoPromise;
    console.log("Async/await success:", res);
  } catch (err) {
    console.log("Async/await error:", err);
  }
}
testAsyncAwait();

// Part B: Fetch API demonstration
console.log("\n=== FETCH API INTRODUCTION ===");
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.log("Fetch error:", error));
