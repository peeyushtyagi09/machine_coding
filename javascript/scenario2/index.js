let tasks = [];

// ye tho us ke liye ho 
const taskList = document.getElementById("taskList");

// inputs le lo sare
const title = document.getElementById("title");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");

// from ko bhi le lo 
const from = document.getElementById("taskForm");

// sare button ko bhi karlo 



from.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(title.value);
    console.log(priority.value);
    title.value = "";
});
