// The main mistake in the provided code is using <h1> inside the error message when showing form validation errors, which is not appropriate for inline or small error messages in forms.
// Additionally, clearing the error by setting `innerHTML` to an empty string is fine, but the display property (like style.display) should be managed to hide/show the error div for accessibility and better UI.
// Here's how you should do error handling for this scenario:

const addExpense = document.getElementById("addExpense");

// inputs
const expense_id = document.getElementById("expense_id");
const expense_title = document.getElementById("expense_title");
const expense_amount = document.getElementById("expense_amount");
const expense_category = document.getElementById("expense_category");
const expense_date = document.getElementById("expense_date");

// errors
const expense_title_error = document.getElementById("expense_title_error");
const expense_id_error = document.getElementById("expense_id_error");
const expense_amount_error = document.getElementById("expense_amount_error");
const expense_category_error = document.getElementById("expense_category_error");

// buttons
const submitBtn = document.getElementById("submit_btn");
const resetBtn = document.getElementById("reset_btn");

let expenses = [];

function empty(){
    expense_id.value = "";
    expense_title.value = "";
    expense_amount.value = "";
    expense_category.value = "";
    expense_date.value = "";
};

resetBtn.addEventListener("click", () => {
    empty();
})

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


function create({ id, title, category, amount, date}){
    const task = {
         id: id, 
         title: title, 
         category: category, 
         amount: amount, 
         date: date,
    }
    expenses.push(task);
    empty();
    renderexpenses(tasks);
}

addExpense.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = expense_id.value;
    let title = expense_title.value;
    let amount = expense_amount.value;
    let category = expense_category.value;
    let date = expense_date.value;
    create({ id, title, category, amount, date})
})