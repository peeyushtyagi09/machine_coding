let tasks = [];

const form = document.getElementById("taskForm");

const titleInput = document.getElementById("title");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");

const taskList = document.getElementById("taskList");

const allBtn = document.getElementById("allBtn");
const pendingBtn = document.getElementById("pendingBtn");
const completedBtn = document.getElementById("completedBtn");
const highPriorityBtn = document.getElementById("highPriorityBtn");

function generateId(){
    return Date.now() + Math.random();
}

function createTask(title, priority, dueDate){
    if(!title.trim()){
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

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    rendertasks();
}

function toggleTask(id){
    tasks = tasks.map(task => {
        if(task.id === id){
            return {
                ...task, 
                completed: !task.completed
            };
        }
        return task;
    });
    renderTasks();
}


// change priority
// get peding tasks
// get completed tasks
// get high prority tasks
// sort by priority
function sortByPriority(taskArray){
    const priorityOrder = {
        high: 1,
        mediu: 2, 
        low: 3
    };

    return [...taskArray].sort((a, b) => {
        return (
            priorityOrder[a.priority] - priorityOrder[b.priority]
        );
    });
}

// get overDue Tasks
