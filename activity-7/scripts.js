// ===============================================
// Activity 7 - Product Catalog Display
// ===============================================

console.log("=== Activity 7: Arrays and Objects Demonstrations ===");

// --- Array Demonstrations ---
const numbers = [10, 20, 30, 40, 50];
console.log("Numbers array:", numbers);

const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers (using map):", doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers (using filter):", evenNumbers);

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of numbers (using reduce):", total);

// --- Object Demonstrations ---
const student = {
  name: "Truong Pham",
  course: "ITDEV160",
  grade: "A",
  displayInfo: function () {
    console.log(`${this.name} is taking ${this.course} and earned grade ${this.grade}.`);
  },
};
student.displayInfo();

console.log("\n=== Product Catalog Application ===");

// -----------------------------------------------
// Product Data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Bluetooth headphones with noise cancellation and 20-hour battery life.",
    price: 99.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    description: "Track your fitness, heart rate, and sleep with this stylish smartwatch.",
    price: 149.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight and comfortable shoes designed for performance and style.",
    price: 79.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
  },
  
  {
    id: 4,
    name: "Graphic T-Shirt",
    description: "Soft cotton t-shirt featuring a stylish modern design.",
    price: 24.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Photography Basics Book",
    description: "A beginner's guide to mastering the art of photography.",
    price: 29.99,
    category: "books",
    image: "https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&w=800&q=80",
  },
];

// -----------------------------------------------
// Select elements
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const resultsCount = document.getElementById("resultsCount");

// -----------------------------------------------
// Display all products
function displayProducts(filteredProducts) {
  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    resultsCount.textContent = "No products match your search.";
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <span class="product-category">${product.category}</span>
      </div>
    `;
    productGrid.appendChild(card);
  });

  resultsCount.textContent = `Showing ${filteredProducts.length} product(s)`;
}

// -----------------------------------------------
// Search and Filter Logic
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                          product.description.toLowerCase().includes(searchTerm);
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}

// -----------------------------------------------
// Event Listeners
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
clearFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  displayProducts(products);
});

// -----------------------------------------------
// Initialize
displayProducts(products);

document.getElementById("output").innerHTML = `
  <h3>JavaScript Array & Object Demo Loaded!</h3>
  <p>✔️ Array methods used: <code>map()</code>, <code>filter()</code>, <code>reduce()</code></p>
  <p>✔️ Object demonstration shown in console</p>
  <p>✔️ Dynamic product catalog displayed below</p>
`;

console.log("=== End of Activity 7 Script ===");
