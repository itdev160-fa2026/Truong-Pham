console.log("=== Activity 4: Interactive To-Do List (Part 1) ===");

let tasks = [];
let taskIdCounter = 1;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = {
    id: taskIdCounter++,
    text: taskText,
    completed: false
  };
  tasks.push(task);

  const listItem = createTaskElement(task);
  document.getElementById("todo-list").appendChild(listItem);

  taskInput.value = "";
  updateTaskStats();
}

function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.className = "task-item";
  listItem.setAttribute("data-task-id", task.id);

  const taskTextSpan = document.createElement("span");
  taskTextSpan.className = "task-text";
  taskTextSpan.textContent = task.text;

  const statusSpan = document.createElement("span");
  statusSpan.className = "task-status status-pending";
  statusSpan.textContent = "⏳ Pending";

  listItem.appendChild(taskTextSpan);
  listItem.appendChild(statusSpan);

  listItem.onclick = function () {
    toggleTaskCompletion(task.id);
  };

  return listItem;
}

function toggleTaskCompletion(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  task.completed = !task.completed;

  const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
  const statusSpan = listItem.querySelector(".task-status");

  if (task.completed) {
    listItem.classList.add("done");
    statusSpan.textContent = "✔ Done";
    statusSpan.className = "task-status status-done";
  } else {
    listItem.classList.remove("done");
    statusSpan.textContent = "⏳ Pending";
    statusSpan.className = "task-status status-pending";
  }

  updateTaskStats();
}

function updateTaskStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  document.getElementById("taskCount").textContent = `(${total} tasks)`;
  document.getElementById("totalTasks").textContent = `Total: ${total}`;
  document.getElementById("completedTasks").textContent = `Completed: ${completed}`;
  document.getElementById("pendingTasks").textContent = `Pending: ${pending}`;
}
