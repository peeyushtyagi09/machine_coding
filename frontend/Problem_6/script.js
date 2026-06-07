const images = [
    "images/image_1.png",
    "images/image_2.png",
    "images/image_3.png", 
    "images/image_4.png"
];

// accessing dom element
const img = document.getElementById("myImage");
const prevBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const imgCnt = document.getElementById("img_cnt");

let idx = 0;
img.src = images[idx];
imgCnt.innerHTML = idx;

const n = images.length;

prevBtn.addEventListener("click", () => {
    idx = (idx - 1 + n) % n;
    img.src  = images[idx];
imgCnt.innerHTML = idx;
time = 0;
    
});

nextBtn.addEventListener("click", () => {
    idx = (idx + 1 + n) % n;
    img.src = images[idx];
imgCnt.innerHTML = idx;
time = 0;
})

let time = 0;
setInterval(() => {
    time++;
    if(time == 5){
        idx = (idx + 1) % n;
        img.src = images[idx];
        imgCnt.innerHTML = idx;
        time = 0;
    }
}, 1000)
