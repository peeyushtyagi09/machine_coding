// Accessing DOM element 
const display = document.getElementById("display_area");

// State 
let expression = "";

display.textContent = "0";

// Number buttons
for (let i = 0; i <= 9; i++) {
    const btn = document.getElementById(`button-${i}`);
    if (btn) {
        btn.addEventListener("click", () => {
            expression += i;
            updateDisplay();
        });
    }
}

document.getElementById("button-divide").addEventListener("click", () => {
    addOperator("/");
});

document.getElementById("button-multiply").addEventListener("click", () => {
    addOperator("*");
});

document.getElementById("button-minus").addEventListener("click", () => {
    addOperator("-");
});

document.getElementById("button-add").addEventListener("click", () => {
    addOperator("+");
});

document.getElementById("button-dot").addEventListener("click", () => {
    // Prevent consecutive dots or dot after operator
    if (expression === "" || /[+\-*/.]$/.test(expression)) return;
    // Prevent multiple dots in a number
    const parts = expression.split(/[+\-*/]/);
    if (parts[parts.length-1].includes(".")) return;
    expression += ".";
    updateDisplay();
});

document.getElementById("button-equal").addEventListener("click", () => {
    calculateResult();
});

document.getElementById("button-clear").addEventListener("click", () => {
    clearCalculator();
});

function addOperator(operator) {
    if (expression.length === 0) return;
    const lastChar = expression[expression.length - 1];
    if (["+", "-", "*", "/", "."].includes(lastChar)) return;
    expression += operator;
    updateDisplay();
}

function calculateResult() {
    try {
        if (expression === "") return;
        // Prevent eval on unsafe trailing operator
        if (/[+\-*/.]$/.test(expression)) {
            display.textContent = "Error";
            expression = "";
            return;
        }
        // eslint-disable-next-line no-eval
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch {
        display.textContent = "Error";
        expression = "";
    }
}

function clearCalculator() {
    expression = "";
    updateDisplay();
}

function updateDisplay() {
    display.textContent = expression || "0";
}