const createTask = document.getElementById("createTask");
const taskid = document.getElementById("taskId");
const taskTitle = document.getElementById("taskTitle");
const taskPriority = document.getElementById("taskPriority");
const alltasks = document.getElementById("alltasks");



let tasks = [];

function renderTasks({taskary = tasks}){
    if(taskary.length === 0){
        alltasks.innerHTML = `
            <h1>No tasks is found.....</h1>
        `
    }

    taskary.forEach((e) => {
        alltasks.innerHTML = `
            <h1>${e.id}</h1>
            <h1>${e.title}</h1>
            <h1>${e.priority}</h1>
        `
    });
}
// The mistake is in how you are calling the `create` function with arguments, but the function expects a single object argument destructured.
// You're passing three separate arguments, but the function expects a single object with keys {idval, title, priority}.

// CORRECTED:

function create({idval, title, priority}) {
    console.log(idval, title, priority);
    const task = {
        id: idval,
        title: title, 
        priority: priority
    };

    tasks.push(task);
    renderTasks({ taskary: tasks });
}

createTask.addEventListener("submit", (e) => {
    e.preventDefault();
    let idval = taskid.value;
    let titleval = taskTitle.value;
    let Priorityval = taskPriority.value;
    console.log(idval, titleval, Priorityval);

    // Pass an object as required by the create function
    return create({
        idval: idval, 
        title: titleval, 
        priority: Priorityval
    });
})

