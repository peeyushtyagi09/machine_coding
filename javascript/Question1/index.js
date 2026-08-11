const form = document.getElementById("form");

// inputs

//name 
const name = document.getElementById("name");
const name_error = document.getElementById("name-error");

// email
const email = document.getElementById("email");
const email_error = document.getElementById("email_error");

// password
const password = document.getElementById("password"); 
const password_error = document.getElementById("password_error");

// confirm password
const confirm_password = document.getElementById("confirm-password");
const confirm_password_error = document.getElementById("confirm_password_error");

// buttons
const submit_btn = document.getElementById("submit-btn");
const reset_btn = document.getElementById("reset-btn");


// name.addEventListener("input", (e) => {
//     console.log(e.target.value);
//     name_error.innerText = "";
//     let val = e.target.value;
//     if(val.trim() == " "){
//         name.innerText = `
//             <h1>name is required</h1>
//         `;
//     }
//     return;
// })

name.addEventListener("input", (e) => {
    let val = e.target.value.trim();
   if(val === ""){
    name_error.innerText = "name is required";
   }else{
    name_error.innerText = "";
   }
});