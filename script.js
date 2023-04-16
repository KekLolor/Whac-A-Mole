const boxes = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const restart = document.getElementById("restart");
const timeCounter = document.getElementById("time");
const scoreCounter = document.getElementById("score");

let score = 0;
let currentBox = 0;
let isLocked = false;
let cuurentTime = 10;

function showMole(){
    boxes.forEach((box) => {
        box.classList.remove("mole");
    });
    isLocked = false;
    let randomBox = boxes[Math.floor(Math.random() * 9)];

    randomBox.classList.add("mole");

    currentBox = randomBox.id;
}

function start(){
    scort = 0;
    currentTime = 10;
    moleTimer = setInterval(showMole, 300)
    timeTimer = setInterval(countTime, 1000)
}

start();

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(box.id == currentBox){
            if(isLocked) return;

            score++;
            scoreCounter.innerHTML = score;
            box.classList.remove("mole");
            isLocked = true;
        }
    })
})

function countTime(){
    currentTime--;
    timeCounter.innerHTML = currentTime;

    if(currentTime == 0){
        clearInterval(timeTimer);
        clearInterval(moleTimer);
        alert('Bruh... game over.\nYour score:' + score)
    }
}

function restartGame() {
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    start();
}

restart.addEventListener("click", restartGame);
