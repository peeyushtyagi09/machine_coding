// Access DOM Elements
const firstnameInputValue = document.getElementById("first-name");
const lastnameInputValue = document.getElementById("last-name");

// Options
const numberCheckbox = document.getElementById("addnumber");
const underscoreCheckbox = document.getElementById("addunderscore");
const uppercaseCheckbox = document.getElementById("uppercase");

// Result and Buttons
const generateBtn = document.getElementById("generate-btn");
const displayUsername = document.getElementById("display-username");
const copyBtn = document.getElementById("copy-btn");
const copyFeedback = document.getElementById("copy-feedback");

// Generate Username
function generateUsername() {
    let firstName = firstnameInputValue.value.trim();
    let lastName = lastnameInputValue.value.trim();

    if (firstName === "" && lastName === "") {
        alert("Please fill all fields");
        return;
    } else if (firstName === "") {
        alert("Please enter first name");
        return;
    } else if (lastName === "") {
        alert("Please enter last name");
        return;
    }

    // Remove all spaces inside names
    firstName = firstName.replace(/\s+/g, "");
    lastName = lastName.replace(/\s+/g, "");

    let username = "";

    if (underscoreCheckbox.checked) {
        username = firstName + '_' + lastName;
    } else {
        username = firstName + lastName;
    }

    if (numberCheckbox.checked) {
        let randomNumber = Math.floor(Math.random() * 999) + 1;
        username += randomNumber;
    }

    if (uppercaseCheckbox.checked) {
        username = username.toUpperCase();
    } else {
        username = username.toLowerCase();
    }

    // Display
    displayUsername.textContent = username;
}

// Copy Username

function copyUsername() {
    const username = displayUsername.textContent;

    if (username === "") {
        return;
    }

    navigator.clipboard.writeText(username);

    copyFeedback.style.display = "inline";

    setTimeout(() => {
        copyFeedback.style.display = "none";
    }, 1500);
}

// Event Listeners

generateBtn.addEventListener("click", generateUsername);
copyBtn.addEventListener("click", copyUsername);