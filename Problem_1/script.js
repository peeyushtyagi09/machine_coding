// DOM SCRIPT
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

const totalCount = document.getElementById("count-total");
const completedCount = document.getElementById("count-completed");

const filterButtons = document.querySelectorAll(".filter-btn");

const sortSelect = document.getElementById("sort-select");

const clearCompletedBtn =
document.getElementById("clear-completed");

const emptyMessage =
document.getElementById("empty-message");

// from their we are writing the logic of add list 
function addTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const text = taskInput.value.trim();
    if(!text){
        .alert("task connot be empty");
        return;
    }
    const task = {
        id: Date.now();
        text;
        completed: false;
        CreatedAt: Date.now()
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = "";
}

//  then here we are writing the render logic
function renderTasks() {
    taskList.innerHTML = "";
    let filteredTasks = [...tasks];

    // filter
    if(currentfilter==="active") {
        filterTasks = filteredTasks.filter(
            task => !task.completed
        );
    }

    else if( currentFilter === "completed"){
        filteredTasks = filteredTasks.filter(
            task => task.completed
        );
    }

    // sort
    filteredTasks.sort((a, b) => {
        if(sortselect.value === "oldest"){
            return a.createdAt - b.createdAt;
        }

        return b.createdAt - a.createdAt;
    });

    // render Tasks
    filteredTasks.forEach(tasks => {
        const li = document.createElement("li");

        li.classList.add("task-item");
        li.innerHTML = `

        <input
        type="checkbox"
        ${task.completed ?
        "checked" : ""}

        data-id="${task.id}"

        class="complete-checkbox">

        <span
        class="task-text
        ${task.completed ?
        "completed" : ""}">

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