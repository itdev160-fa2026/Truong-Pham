console.log("=== Activity 3: Dynamic Greeting Card ===");

// Part A: DOM Selection
const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");
console.log("Selected elements:", greetingMessage, greetingImage, nameInput);

// Greeting data
const greetings = {
  birthday: {
    message: "🎉 Happy Birthday! 🎂",
    image: "https://picsum.photos/id/1/300/200?text=Happy+Birthday!",
    alt: "Birthday greeting"
  },
  holiday: {
    message: "🎄 Happy Holidays! ⭐",
    image: "https://picsum.photos/id/12/300/200?text=Happy+Holidays!",
    alt: "Holiday greeting"
  },
  thankYou: {
    message: "🙏 Thank You! 💝",
    image: "https://picsum.photos/id/47/300/200?text=Thank+You!",
    alt: "Thank you greeting"
  },
  welcome: {
    message: "👋 Welcome! 🌟",
    image: "https://picsum.photos/id/237/300/200?text=Welcome",
    alt: "Welcome greeting"
  }
};

// Update greeting function
function updateGreeting(type) {
  const greeting = greetings[type];
  if (greeting) {
    greetingMessage.textContent = greeting.message;
    greetingImage.setAttribute("src", greeting.image);
    greetingImage.setAttribute("alt", greeting.alt);
  }
}

function setBirthdayGreeting() { updateGreeting("birthday"); }
function setHolidayGreeting() { updateGreeting("holiday"); }
function setThankYouGreeting() { updateGreeting("thankYou"); }
function setRandomGreeting() {
  const keys = Object.keys(greetings);
  const randomType = keys[Math.floor(Math.random() * keys.length)];
  updateGreeting(randomType);
}

// Personalize greeting
function personalizeGreeting() {
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Please enter a name!");
    return;
  }
  greetingMessage.innerHTML = `${greetingMessage.textContent}<br><br>Dear ${name}! 💖`;
  nameInput.value = "";
}

// Add demo message
document.getElementById("output").innerHTML = `
  <h3>DOM Manipulation Demo Loaded!</h3>
  <p>✅ Successfully selected and ready to manipulate DOM elements</p>
`;
