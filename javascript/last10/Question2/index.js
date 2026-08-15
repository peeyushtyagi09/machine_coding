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
        expense_date_error.textContent = "Date is required.";
        expense_date_error.style.display = "block";
        submitBtn.disabled = true;
        submitBtn.style.color = 'grey';
    }else{
        expense_date_error.textContent = "";
        expense_date_error.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.style.color = '';
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

function renderexpenses({ array = expenses }){
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
            </div>`
        ).join('');
    }
}

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
    renderexpenses(expenses);
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
    
            form_error.innerHTML = " <h1>all fileld are require</h1>";
            form_error.style.display = "block";
            submitBtn.disabled = true;
            // return; 
        }else{  
            create({ id, title, category, amount, date})
            form_error.style.display = "none";
            submitBtn.disabled = false;
        }
})