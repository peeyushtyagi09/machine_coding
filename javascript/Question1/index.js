const form = document.getElementById("form");

// inputs

// name
const name = document.getElementById("name");
const name_error = document.getElementById("name-error");

// email
const email = document.getElementById("email");
const email_error = document.getElementById("email-error");

// password
const password = document.getElementById("password");
const password_error = document.getElementById("password-error");

// confirm password
const confirm_password = document.getElementById("confirm-password");
const confirm_password_error = document.getElementById("confirm-password-error");

// buttons
const submit_btn = document.getElementById("submit-btn");
const reset_btn = document.getElementById("reset-btn");

const from_data = document.getElementById("from-data");

// Validation functions
function validateName() {
    let val = name.value.trim();
    if (val === "") {
        name_error.innerText = "name is required";
        return false;
    } else if (val.length < 3) {
        name_error.innerText = "name length must be greater than  3";
        return false;
    } else {
        name_error.innerText = "";
        return true;
    }
}

function validateEmail() {
    let val = email.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val === "") {
        email_error.innerText = "email is required";
        return false;
    } else if (!emailPattern.test(val)) {
        email_error.innerText = "please enter a valid email";
        return false;
    } else {
        email_error.innerText = "";
        return true;
    }
}

function validatePassword() {
    let val = password.value;
    if (val.length < 8) {
        password_error.innerText = "password must be 8 characters";
        return false;
    } else {
        password_error.innerText = "";
        return true;
    }
}

function validateConfirmPassword() {
    let val = confirm_password.value;
    if (val !== password.value) {
        confirm_password_error.innerText = "comfirm password is not equal to password";
        return false;
    } else {
        confirm_password_error.innerText = "";
        return true;
    }
}

// Central form validity check
function checkFormValidity() {
    if (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword()
    ) {
        submit_btn.disabled = false;
    } else {
        submit_btn.disabled = true;
    }
}

// Initial state: disable the submit button
submit_btn.disabled = true;

// name validation
name.addEventListener("input", (e) => {
    validateName();
    checkFormValidity();
});

// email validation
email.addEventListener("input", (e) => {
    validateEmail();
    checkFormValidity();
});

// password validation
password.addEventListener("input", (e) => {
    validatePassword();
    // also check confirm password because password change can affect it
    validateConfirmPassword();
    checkFormValidity();
});

// confirm password validation
confirm_password.addEventListener("input", (e) => {
    validateConfirmPassword();
    checkFormValidity();
});

// handle submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Optionally, run validation one more time (edge case before submit)
    if (
        !validateName() ||
        !validateEmail() ||
        !validatePassword() ||
        !validateConfirmPassword()
    ) {
        checkFormValidity();
        return;
    }

    from_data.innerHTML = `
        <h1>${name.value}</h1>
        <p><strong>Email:</strong> ${email.value}</p> 
    `;
    name.value = "";
    email.value = "";
    password.value = "";
    confirm_password.value = "";

    // Clear errors and reset submit button
    name_error.innerText = "";
    email_error.innerText = "";
    password_error.innerText = "";
    confirm_password_error.innerText = "";
reset_btn.addEventListener("click", () => {
    name.value = "";
    email.value = "";
    password.value = "";
    confirm_password.value = "";
})