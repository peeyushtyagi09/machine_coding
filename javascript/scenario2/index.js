// ===============================
// STATE
// ===============================

let tasks = [];


// ===============================
// DOM REFERENCES
// ===============================

const form = document.getElementById("taskForm");

const titleInput = document.getElementById("title");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");

const taskList = document.getElementById("taskList");

const allBtn = document.getElementById("allBtn");
const pendingBtn = document.getElementById("pendingBtn");
const completedBtn = document.getElementById("completedBtn");
const highPriorityBtn = document.getElementById("highPriorityBtn");


// ===============================
// CREATE UNIQUE ID
// ===============================

function generateId() {
    return Date.now() + Math.random();
}


// ===============================
// CREATE TASK
// ===============================

function createTask(title, priority, dueDate) {

    // Validation
    if (!title.trim()) {
        alert("Task title is required");
        return;
    }

    const task = {
        id: generateId(),
        title: title.trim(),
        priority: priority,
        dueDate: dueDate,
        completed: false,
        createdAt: new Date()
    };

    tasks.push(task);

    renderTasks();
}


// ===============================
// DELETE TASK
// ===============================

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    renderTasks();
}


// ===============================
// TOGGLE COMPLETED
// ===============================

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            return {
                ...task,
                completed: !task.completed
            };

        }

        return task;
    });

    renderTasks();
}


// ===============================
// CHANGE PRIORITY
// ===============================

function changePriority(id, newPriority) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            return {
                ...task,
                priority: newPriority
            };

        }

        return task;
    });

    renderTasks();
}


// ===============================
// GET PENDING TASKS
// ===============================

function getPendingTasks() {

    return tasks.filter(task => {
        return !task.completed;
    });

}


// ===============================
// GET COMPLETED TASKS
// ===============================

function getCompletedTasks() {

    return tasks.filter(task => {
        return task.completed;
    });

}


// ===============================
// GET HIGH PRIORITY TASKS
// ===============================

function getHighPriorityTasks() {

    return tasks.filter(task => {
        return task.priority === "high";
    });

}


// ===============================
// SORT BY PRIORITY
// ===============================

function sortByPriority(taskArray) {

    const priorityOrder = {
        high: 1,
        medium: 2,
        low: 3
    };

    return [...taskArray].sort((a, b) => {

        return (
            priorityOrder[a.priority] -
            priorityOrder[b.priority]
        );

    });
}


// ===============================
// GET OVERDUE TASKS
// ===============================

function getOverdueTasks() {

    const today = new Date();

    return tasks.filter(task => {

        if (!task.dueDate) {
            return false;
        }

        const dueDate = new Date(task.dueDate);

        return (
            dueDate < today &&
            !task.completed
        );

    });

}


// ===============================
// RENDER TASKS
// ===============================

function renderTasks(taskArray = tasks) {

    taskList.innerHTML = "";

    if (taskArray.length === 0) {

        taskList.innerHTML = `
            <p>No tasks found.</p>
        `;

        return;
    }


    taskArray.forEach(task => {

        const taskElement = document.createElement("div");

        taskElement.className = "task";


        if (task.completed) {
            taskElement.classList.add("completed");
        }


        taskElement.innerHTML = `

            <div>

                <h3>${task.title}</h3>

                <p>
                    Priority:
                    <strong>${task.priority}</strong>
                </p>

                <p>
                    Due:
                    ${task.dueDate || "No due date"}
                </p>

            </div>

            <div class="actions">

                <button
                    onclick="toggleTask(${task.id})"
                >
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button
                    onclick="deleteTask(${task.id})"
                >
                    Delete
                </button>

            </div>
        `;


        taskList.appendChild(taskElement);

    });

}


// ===============================
// FORM SUBMISSION
// ===============================

form.addEventListener("submit", function(e) {

    e.preventDefault();

    createTask(
        titleInput.value,
        priorityInput.value,
        dueDateInput.value
    );

    form.reset();

});


// ===============================
// FILTER BUTTONS
// ===============================

allBtn.addEventListener("click", function() {

    renderTasks(tasks);

});


pendingBtn.addEventListener("click", function() {

    renderTasks(
        getPendingTasks()
    );

});


completedBtn.addEventListener("click", function() {

    renderTasks(
        getCompletedTasks()
    );

});


highPriorityBtn.addEventListener("click", function() {

    renderTasks(
        getHighPriorityTasks()
    );

});


// ===============================
// INITIAL RENDER
// ===============================

renderTasks();