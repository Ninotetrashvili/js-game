// const message = document.querySelector(".message");
// const number = document.querySelector(".number");
// const value = document.querySelector(".guess");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector(".check");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
number.textContent = secretNumber;

let score = 20;
let highscore = 0;

// dry princile - dont repeat yourself

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // checking if user write number

  if (!guess) {
    displayMessage("No number...");
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "56px";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "It's higher!" : "It's lower!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

again.addEventListener("click", function () {
  score = 20;
  highscore = 0;
  document.querySelector(".highscore").textContent = highscore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "30px";
});
