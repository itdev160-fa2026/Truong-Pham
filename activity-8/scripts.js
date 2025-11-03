// Activity 8: Quote of the Day Generator
console.log("\n=== QUOTE API INTEGRATION ===");

const QUOTE_API = "https://dummyjson.com/quotes/random";
let appState = { currentQuote: null, isLoading: false };

// Fetch quote
async function fetchQuote() {
  try {
    showLoading(true);
    hideError();

    const response = await fetch(QUOTE_API);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.log("Fetched quote data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    showError(`Failed to fetch quote: ${error.message}`);
    return null;
  } finally {
    showLoading(false);
  }
}

// Display quote
function displayQuote(quote) {
  const container = document.getElementById("quoteContainer");
  const card = document.createElement("div");
  card.className = "quote-card";

  card.innerHTML = `
    <p class="quote-text">${quote.quote}</p>
    <p class="quote-author">&mdash; ${quote.author}</p>
  `;

  container.innerHTML = "";
  container.appendChild(card);
  console.log(`Displayed quote by ${quote.author}`);
}

// UI helpers
function showLoading(show) {
  const loading = document.getElementById("loadingIndicator");
  const button = document.getElementById("getQuoteBtn");
  if (show) {
    loading.classList.remove("hidden");
    button.disabled = true;
  } else {
    loading.classList.add("hidden");
    button.disabled = false;
  }
}

function showError(message) {
  const errorBox = document.getElementById("errorDisplay");
  document.getElementById("errorMessage").textContent = message;
  errorBox.classList.remove("hidden");
}

function hideError() {
  document.getElementById("errorDisplay").classList.add("hidden");
}

// Event listeners
function initializeApp() {
  document.getElementById("getQuoteBtn").addEventListener("click", getNewQuote);
  document.getElementById("retryBtn").addEventListener("click", getNewQuote);
  console.log("App initialized successfully.");
}

async function getNewQuote() {
  const quote = await fetchQuote();
  if (quote) displayQuote(quote);
}

initializeApp();
