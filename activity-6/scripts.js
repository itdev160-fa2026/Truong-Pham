// ===============================================
// Activity 6 - Interactive To-Do List (Part 2)
// ===============================================

console.log("=== Activity 6: Interactive To-Do List (Part 2) ===");

// Global app state
const todoState = {
  tasks: [],
  nextId: 1,
  currentFilter: "all",
};

// Select elements
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("taskCount");
const emptyState = document.getElementById("emptyState");

// Bulk and filter buttons
const markAllDoneBtn = document.getElementById("markAllDoneBtn");
const deleteCompletedBtn = document.getElementById("deleteCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const filterButtons = document.querySelectorAll(".filter-btn");


// -----------------------------------------------
// Helper: Create a new task object
function createTask(text, priority) {
  return {
    id: todoState.nextId++,
    text,
    priority,
    completed: false,
  };
}

// -----------------------------------------------
// Add a new task
function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  const task = createTask(text, priority);
  todoState.tasks.push(task);

  taskInput.value = "";
  renderTasks();
}

// -----------------------------------------------
// Toggle completion status
function toggleTaskStatus(taskId) {
  const task = todoState.tasks.find(t => t.id === taskId);
  if (!task) return;

  task.completed = !task.completed;
  renderTasks();
}

// -----------------------------------------------
// Delete a task
function deleteTask(taskId) {
  todoState.tasks = todoState.tasks.filter(t => t.id !== taskId);
  renderTasks();
}

// -----------------------------------------------
// Filter tasks (all, pending, completed)
function setFilter(filter) {
  todoState.currentFilter = filter;
  filterButtons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
  renderTasks();
}

// -----------------------------------------------
// Render task list
function renderTasks() {
  todoList.innerHTML = "";

  // Apply filter
  let filteredTasks = todoState.tasks;
  if (todoState.currentFilter === "pending") {
    filteredTasks = todoState.tasks.filter(t => !t.completed);
  } else if (todoState.currentFilter === "completed") {
    filteredTasks = todoState.tasks.filter(t => t.completed);
  }

  // Update empty state
  if (filteredTasks.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  // Render each task
  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("done");
    li.setAttribute("data-task-id", task.id);

    // Task text + priority
    const spanText = document.createElement("span");
    spanText.className = "task-text";
    spanText.textContent = task.text;

    const spanPriority = document.createElement("span");
    spanPriority.className = `task-priority priority-${task.priority}`;
    spanPriority.textContent =
      task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

    // Action buttons
    const actions = document.createElement("div");
    actions.className = "task-actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "task-btn toggle-btn";
    toggleBtn.textContent = task.completed ? "Undo" : "Done";
    toggleBtn.addEventListener("click", () => toggleTaskStatus(task.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "task-btn delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(spanText);
    li.appendChild(spanPriority);
    li.appendChild(actions);
    todoList.appendChild(li);
  });

  updateTaskStats();
}

// -----------------------------------------------
// Update stats (total, completed, pending)
function updateTaskStats() {
  const total = todoState.tasks.length;
  const completed = todoState.tasks.filter(t => t.completed).length;
  const pending = total - completed;

  taskCount.textContent = `(${total} tasks)`;
  document.getElementById("totalTasks").textContent = `Total: ${total}`;
  document.getElementById("completedTasks").textContent = `Completed: ${completed}`;
  document.getElementById("pendingTasks").textContent = `Pending: ${pending}`;
}

// -----------------------------------------------
// Bulk actions
function markAllTasksDone() {
  todoState.tasks.forEach(t => (t.completed = true));
  renderTasks();
}

function deleteAllCompletedTasks() {
  todoState.tasks = todoState.tasks.filter(t => !t.completed);
  renderTasks();
}

function clearAllTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    todoState.tasks = [];
    renderTasks();
  }
}

// -----------------------------------------------
// Event Listeners
addTaskBtn.addEventListener("click", addTask);
markAllDoneBtn.addEventListener("click", markAllTasksDone);
deleteCompletedBtn.addEventListener("click", deleteAllCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => setFilter(btn.dataset.filter));
});

// -----------------------------------------------
// Initialize app
function initializeApp() {
  renderTasks();
  console.log("To-Do List initialized successfully!");
}

initializeApp();
