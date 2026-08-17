// not working what mistake i am dong in filter 

const addExpense = document.getElementById("addExpense");

// inputs
const expense_id = document.getElementById("expense_id");
const expense_title = document.getElementById("expense_title");
const expense_amount = document.getElementById("expense_amount");
const expense_category = document.getElementById("expense_category");
const expense_date = document.getElementById("expense_date");
const totalexpenses = document.getElementById("totalexpenses");
const totalAmount = document.getElementById("total_amount");

// errors
const expense_title_error = document.getElementById("expense_title_error");
const expense_id_error = document.getElementById("expense_id_error");
const expense_amount_error = document.getElementById("expense_amount_error");
const expense_category_error = document.getElementById("expense_category_error");
const form_error = document.getElementById("form_error");

// buttons
const submitBtn = document.getElementById("submit_btn");
const resetBtn = document.getElementById("reset_btn");

// render
const allExpense = document.getElementById("allExpense");

// filter
const search = document.getElementById("search");

let expenses = [];
let editingExpenseId = null; // Track which expense is being edited, if any

function empty(){
    expense_id.value = "";
    expense_title.value = "";
    expense_amount.value = "";
    expense_category.value = "";
    expense_date.value = "";
    editingExpenseId = null; // Clear edit state when empty is called
    submitBtn.textContent = "Add Expense";
};

resetBtn.addEventListener("click", () => {
    empty();
})

expense_id.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    if(val == ""){
        expense_id_error.textContent = "Expense id is required...";
        expense_id_error.style.display = "block";
        submitBtn.disabled = true;
        submitBtn.style.color = 'grey';
    }else{
        expense_id_error.textContent = "";
        expense_id_error.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.style.color = '';
    }
});

expense_amount.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    if(val === "" || parseFloat(val) <= 0){
        expense_amount_error.textContent = "Amount is required and must be greater than 0.";
        expense_amount_error.style.display = "block";
        submitBtn.disabled = true;
        submitBtn.style.color = 'grey';
    }else{
        expense_amount_error.textContent = "";
        expense_amount_error.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.style.color = '';
    }
});

expense_date.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    if(val === ""){
        if(window.expense_date_error) {
            expense_date_error.textContent = "Date is required.";
            expense_date_error.style.display = "block";
            submitBtn.disabled = true;
            submitBtn.style.color = 'grey';
        }
    }else{
        if(window.expense_date_error) {
            expense_date_error.textContent = "";
            expense_date_error.style.display = "none";
            submitBtn.disabled = false;
            submitBtn.style.color = '';
        }
    }
});


expense_category.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    if(val === ""){
        expense_category_error.textContent = "Category is required.";
        expense_category_error.style.display = "block";
        submitBtn.disabled = true;
        submitBtn.style.color = 'grey';

    }else{
        expense_category_error.textContent = "";
        expense_category_error.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.style.color = '';
    }
})

expense_title.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    if(val === ""){
        expense_title_error.textContent = "Title is required.";
        expense_title_error.style.display = "block";
        submitBtn.disabled = true;
        submitBtn.style.color = 'grey';
    }else{
        expense_title_error.textContent = "";
        expense_title_error.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.style.color = '';
    }
});

function renderexpenses({ array }){
    totalexpenses.innerText = array.length;
    let sum = 0;
    array.forEach(e => {
        sum += parseFloat(e.amount);
    });
    totalAmount.innerText = `${sum}`;
    if(array.length === 0){
        allExpense.innerHTML = "<h1> No products found </h1>"
    }else{
        allExpense.innerHTML = array.map(exp =>
            `<div class="expense-item">
                <div><strong>ID:</strong> ${exp.id}</div>
                <div><strong>Title:</strong> ${exp.title}</div>
                <div><strong>Category:</strong> ${exp.category}</div>
                <div><strong>Amount:</strong> $${exp.amount}</div>
                <div><strong>Date:</strong> ${exp.date}</div>
                <button id="delete_btn" data-id="${exp.id}">Delete</button>
                <button id="Edit_btn" data-id="${exp.id}">Edit</button>
            </div>`
        ).join('');
    }
}

allExpense.addEventListener("click", (e) => {
    if(e.target && e.target.matches("button#delete_btn")) {
        const idToDelete = e.target.getAttribute("data-id");
        // Remove the expense with matching id
        expenses = expenses.filter(exp => exp.id !== idToDelete);
        renderexpenses({ array: expenses });
        // If we're currently editing this expense, cancel editing
        if(editingExpenseId === idToDelete) {
            empty();
        }
    }
});

allExpense.addEventListener("click", (e) => {
    if(e.target && e.target.matches("button#Edit_btn")){
        const idToEdit = e.target.getAttribute("data-id");
        const expenseToEdit = expenses.find(exp => exp.id === idToEdit);
        if(expenseToEdit) {
            expense_id.value = expenseToEdit.id;
            expense_title.value = expenseToEdit.title;
            expense_amount.value = expenseToEdit.amount;
            expense_category.value = expenseToEdit.category;
            expense_date.value = expenseToEdit.date;

            expense_title.focus();

            // Set editingExpenseId so submit will update in-place
            editingExpenseId = idToEdit;
            submitBtn.textContent = "Update Expense";

            // (Optional UX) Scroll to the form
            if(addExpense.scrollIntoView) {
                addExpense.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
});

function create({ id, title, category, amount, date}) {
    const task = {
        id: id, 
        title: title, 
        category: category, 
        amount: amount, 
        date: date,
    }
    expenses.push(task);
    empty();
    renderexpenses({ array: expenses });
}

function updateExpense({ id, title, category, amount, date }) {
    expenses = expenses.map(exp => {
        if(exp.id === id) {
            return { id, title, category, amount, date };
        }
        return exp;
    });
    empty();
    renderexpenses({ array: expenses });
}

addExpense.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = expense_id.value;
    let title = expense_title.value;
    let amount = expense_amount.value;
    let category = expense_category.value;
    let date = expense_date.value;

    if (
        id.trim() === "" ||
        title.trim() === "" ||
        category.trim() === "" ||
        amount.trim() === "" ||
        date.trim() === ""
    ) {
        form_error.innerHTML = " <h1>All fields are required</h1>";
        form_error.style.display = "block";
        submitBtn.disabled = true;
    } else {
        form_error.style.display = "none";
        submitBtn.disabled = false;

        if (editingExpenseId) {
            // Update logic
            updateExpense({ id, title, category, amount, date });
        } else {
            // Add logic
            create({ id, title, category, amount, date });
        }
    }
})


//  Search expenses by title
search.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase().trim();
    let filteredExpenses;
    if (val === "") {
        filteredExpenses = expenses;
    } else {
        filteredExpenses = expenses.filter(exp => {
            return exp.title && exp.title.toLowerCase().includes(val);
        });
    }
    renderexpenses({array: filteredExpenses});
});