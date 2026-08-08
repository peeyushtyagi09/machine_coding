// accessing dom elements
const passwordOutput = document.getElementById("password-output");
const lengthSlider = document.getElementById("length-slider");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numberCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const strengthText = document.getElementById("strength");
const lengthValue = document.getElementById("length-value");

// define character sets
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@!~#$%^&*?><";

// update the slider length UI
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

// generate password
function generatePassword() {
    let character = "";

    if (uppercaseCheckbox.checked) {
        character += uppercase;
    }
    if (lowercaseCheckbox.checked) {
        character += lowercase;
    }
    if (numberCheckbox.checked) {
        character += number;
    }
    if (symbolsCheckbox.checked) {
        character += symbol;
    }
    // validation
    if (character.length === 0) {
        alert("You should select at least one checkbox");
        return;
    }

    // password generation
    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        let idx = Math.floor(Math.random() * character.length);
        password += character[idx];
    }

    // display password
    passwordOutput.value = password;

    updateStrength(password);
}

// update password strength
function updateStrength(password) {
    let strength = "weak";
    let count = 0;

    if (uppercaseCheckbox.checked) count++;
    if (lowercaseCheckbox.checked) count++;
    if (numberCheckbox.checked) count++;
    if (symbolsCheckbox.checked) count++;
    if (password.length >= 8) count++;

    if (count === 5) {
        strength = "strong";
        strengthText.className = "strong";
    } else if (count >= 3) {
        strength = "medium";
        strengthText.className = "medium";
    } else {
        strength = "weak";
        strengthText.className = "weak";
    }
    strengthText.textContent = strength;
}

copyBtn.addEventListener("click", () => {
    if (passwordOutput.value === "") {
        return;
    }
    navigator.clipboard.writeText(passwordOutput.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
});

// generate Button Event
generateBtn.addEventListener("click", generatePassword);

// generate initial password on load
generatePassword();