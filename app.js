
let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "orange"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let highScore = localStorage.getItem("simonHighScore") || 0;

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

document.addEventListener("touchstart", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highScore) {
            localStorage.setItem("simonHighScore", level);
            highScore = level;
        }

        h3.innerHTML = `Game Over! Your score was <b>${level}</b><br>High Score: <b>${highScore}</b><br>Press any key or tap to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let allBtns = document.querySelectorAll(".box");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}