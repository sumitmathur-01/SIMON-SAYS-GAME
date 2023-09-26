let gameSeq = [];
let userSeq = [];
let btns = ["blue", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

// step : 1_______
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");

    started = true;
    levelUp();
  }
});

// step : 2_______

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

// step : 3_______

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! 😵 Your score was <u><i>${level}.</i></u> <br> Press any key to start.`;

    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// step : 4_______

function reset() {    
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}