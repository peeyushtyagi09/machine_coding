// DOM SCRIPT
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

const totalCount = document.getElementById("count-total");
const completedCount = document.getElementById("count-completed");

const filterButtons = document.querySelectorAll(".filter-btn");

const sortSelect = document.getElementById("sort-select");

const clearCompletedBtn = document.getElementById("clear-completed");

const emptyMessage = document.getElementById("empty-message");

// Use a global tasks array to keep in sync
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Logic for adding a task
function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        alert("Task cannot be empty");
        return;
    }
    const task = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: Date.now()
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = "";
}

// Render logic
function renderTasks() {
    taskList.innerHTML = "";
    let filteredTasks = [...tasks];

    // Filter
    if (currentFilter === "active") {
        filteredTasks = filteredTasks.filter(
            task => !task.completed
        );
    } else if (currentFilter === "completed") {
        filteredTasks = filteredTasks.filter(
            task => task.completed
        );
    }

    // Sort
    filteredTasks.sort((a, b) => {
        if (sortSelect.value === "oldest") {
            return a.createdAt - b.createdAt;
        }
        return b.createdAt - a.createdAt;
    });

    // Render tasks
    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `
            <input
                type="checkbox"
                ${task.completed ? "checked" : ""}
                data-id="${task.id}"
                class="complete-checkbox"
            >
            <span
                class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </span>
            <button
                class="delete-btn"
                data-id="${task.id}">
                Delete
            </button>
        `;
        taskList.appendChild(li);
    });
    updateCounters();
    emptyMessage.style.display = filteredTasks.length === 0 ? "block" : "none";
}

// Toggle Completed
taskList.addEventListener(
    "change",
    (e) => {
        if (e.target.classList.contains("complete-checkbox")) {
            const id = Number(e.target.dataset.id);
            tasks = tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }
                return task;
            });
            saveTasks();
            renderTasks();
        }
    }
);

// Delete tasks 
taskList.addEventListener(
    "click",
    (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const id = Number(e.target.dataset.id);
            tasks = tasks.filter(task => task.id !== id);
            saveTasks();
            renderTasks();
        }
    }
);

// Filter
filterButtons.forEach(btn => {
    btn.addEventListener(
        "click", () => {
            currentFilter = btn.dataset.filter;
            filterButtons.forEach(
                b => b.classList.remove("active")
            );
            btn.classList.add("active");
            renderTasks();
        }
    );
});

// Sort
sortSelect.addEventListener(
    "change",
    renderTasks
);

// Counters
function updateCounters() {
    totalCount.textContent = `Total: ${tasks.length}`;
    const completed = tasks.filter(task => task.completed).length;
    completedCount.textContent = `Completed: ${completed}`;
}

// Clear Completed
clearCompletedBtn.addEventListener(
    "click",
    () => {
        tasks = tasks.filter(
            task => !task.completed
        );
        saveTasks();
        renderTasks();
    }
);

// Save
function saveTasks() {
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

// Events
addButton.addEventListener(
    "click",
    addTask
);

taskInput.addEventListener(
    "keypress",
    (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    }
);

// Initial Render
renderTasks();