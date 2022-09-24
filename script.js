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
  let score = document.createElement("li");

  score.textContent = `Home: ${homescoreCount} Guest: ${guestscoreCount}`;

  homescoreCount = 0;
  guestscoreCount = 0;
  homescore.innerText = 0;
  guestscore.innerText = 0;
  scoreList.appendChild(score);
}

function reset() {
  homescoreCount = 0;
  guestscoreCount = 0;
  homescore.innerText = 0;
  guestscore.innerText = 0;
}
