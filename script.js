let homescore = document.getElementById("home-score");
let guestscore = document.getElementById("guest-score");
const scoreList = document.getElementById("scores");

let homescoreCount = 0;
function add(num) {
  homescoreCount += num;
  homescore.innerHTML = homescoreCount;
}

let guestscoreCount = 0;
function addG(num) {
  guestscoreCount += num;
  guestscore.innerHTML = guestscoreCount;
}

function save() {
  var score = document.createElement("li");

  score.innerHTML = `Home: ${homescoreCount} Guest: ${guestscoreCount}`;
  scoreList.appendChild(score);
  localStorage.setItem("scoreList", scoreList.innerHTML);
  homescoreCount = 0;
  guestscoreCount = 0;
  homescore.innerText = 0;
  guestscore.innerText = 0;
}

function reset() {
  homescoreCount = 0;
  guestscoreCount = 0;
  homescore.innerText = 0;
  guestscore.innerText = 0;
}

function getList() {
  if (scoreList) {
    scoreList.innerHTML = localStorage.getItem("scoreList");
  }
}

const body = document.getElementById("body");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");
const darkModeBtn = document.querySelector(".dark-mode");
const lightModeBtn = document.querySelector(".light-mode");
const scores = document.querySelector(".scores");
function darkMode() {
  resetBtn.style.color = "cyan";
  saveBtn.style.color = "cyan";
  darkModeBtn.style.display = "none";
  lightModeBtn.style.display = "inline";
  body.style.background = "black";
  scores.style.borderColor = "cyan";
  body.style.color = "cyan";
}

function lightMode() {
  resetBtn.style.color = "black";
  saveBtn.style.color = "black";
  body.style.background = "white";
  body.style.color = "black";
  lightModeBtn.style.display = "none";
  darkModeBtn.style.display = "block";
  scores.style.borderColor = "black";
}
