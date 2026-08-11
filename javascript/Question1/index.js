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
const password_error = document.getElementById("password-error");

// confirm password
const confirm_password = document.getElementById("confirm-password");
const confirm_password_error = document.getElementById("confirm-password-error");

// buttons
const submit_btn = document.getElementById("submit-btn");
const reset_btn = document.getElementById("reset-btn");

// name validation
name.addEventListener("input", (e) => {
    let val = e.target.value.trim();
   if(val === ""){
    name_error.innerText = "name is required";
   }else{
    name_error.innerText = "";
   }
});

// email validation
email.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    // simple email regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(val === "") {
        email_error.innerText = "email is required";
    } else if (!emailPattern.test(val)) {
        email_error.innerText = "please enter a valid email";
    } else {
        email_error.innerText = "";
    }
});

password.addEventListener("input", (e) => {
    let val = e.target.value;
    if(val.length < 8){
        password_error.innerText = "password must be 8 characters";
    }else{
        password_error.innerText = "";
    }
});

confirm_password.addEventListener("input", (e) => {
    let val = e.target.value;
    if(val !==  password.value){
        confirm_password_error.innerText = "comfirm password is not equal to password";
    }else{
        confirm_password_error.innerText = "";
    }
});
