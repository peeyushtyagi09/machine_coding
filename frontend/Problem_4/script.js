// accessing dom element
const timer = document.getElementById("timer");
// buttton
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const lapBtn = document.getElementById("lap-btn");

const lapList = document.getElementById("lap-list");

// State

let totalSeconds = 0;
let intervalid = null;
let isRunning = false;

//  Update UI
function updateDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    
    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    const formattedHours =
        String(hours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    timer.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    if(isRunning){
        return;
    }

    isRunning = true;
    intervalid = setInterval(() => {
        totalSeconds++;
        updateDisplay();
    }, 1000);
}

// puase 
function pauseTimer() {
    clearInterval(intervalid);
    isRunning = false;
}

//  Reset 
function resetTimer() {
    clearInterval(intervalid);
    totalSeconds = 0;
    isRunning = false;
    lapList.innerHTML = "";
    updateDisplay();
}

// Lap

function addLap() {

    if (totalSeconds === 0) {
        return;
    }

    const lapItem =
        document.createElement("li");

    lapItem.textContent =
        timer.textContent;

    lapList.appendChild(lapItem);
}


// Events

startBtn.addEventListener(
    "click",
    startTimer
);

pauseBtn.addEventListener(
    "click",
    pauseTimer
);

resetBtn.addEventListener(
    "click",
    resetTimer
);

lapBtn.addEventListener(
    "click",
    addLap
);


// Initial Render

updateDisplay();