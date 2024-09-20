let menu = document.querySelector(".menu");
let menuButton = document.querySelector("#menuBtn");
let finalResult = document.querySelector("#finalResult");

let main = document.querySelector(".main");

let choices = ["rock", "paper", "scissors"];
let totalChoices = choices.length;

let userChoices = document.querySelector("#userChoices");
let result = document.querySelector("#result");

let userScore = 0;
let computerScore = 0;

let userScoreSpan = document.querySelector("#userScore");
userScoreSpan.style.color = "#005f73";
let computerScoreSpan = document.querySelector("#computerScore");
computerScoreSpan.style.color = "#AE2012";

let computerChoice;
let userChoice;

menuButton.addEventListener("click", startGame);

userChoices.addEventListener("click", (choice) => {
  userChoice = choice.target.id;
  if (choices.includes(userChoice)) {
    computerChoice = getComputerChoice();
    playGame(userChoice, computerChoice);
  }
});

function startGame() {
  menu.classList.toggle("inactive");
  main.classList.toggle("inactive");
  menuButton.textContent = "Restart";
}

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * totalChoices);
  let choice = choices[randomChoice];
  return choice;
}
function playRound(userChoice, computerChoice) {
  switch (userChoice) {
    case computerChoice:
      return `Draw! ${userChoice} does not beat ${computerChoice}.`;
      break;
    case "rock":
      if (computerChoice == "scissors") {
        userScore++;
        return `You win! ${userChoice} beats ${computerChoice}.`;
      } else if (computerChoice == "paper") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${userChoice}.`;
      }
      break;
    case "paper":
      if (computerChoice == "rock") {
        userScore++;
        return `You win! ${userChoice} beats ${computerChoice}.`;
      } else if (computerChoice == "scissors") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${userChoice}.`;
      }
      break;
    case "scissors":
      if (computerChoice == "paper") {
        userScore++;
        return `You win! ${userChoice} beats ${computerChoice}.`;
      } else if (computerChoice == "rock") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${userChoice}.`;
      }
      break;
  }
}

function winner() {
  finalResult.style.color = "#005f73";
  return "You win!";
}

function loser() {
  finalResult.style.color = "#AE2012";
  return "You lose!";
}

function playGame(userChoice, computerChoice) {
  let resultText;
  let finalText;
  if (userScore < 5 && computerScore < 5) {
    resultText = playRound(userChoice, computerChoice);
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    result.textContent = resultText;
  }
  if (userScore == 5 || computerScore == 5) {
    finalText = userScore > computerScore ? winner() : loser();
    finalResult.textContent = finalText;
    userScore = 0;
    computerScore = 0;
    userChoices.style["pointer-events"] = "none";
    setTimeout(() => {
      result.textContent = "...";
      userScoreSpan.textContent = userScore;
      computerScoreSpan.textContent = computerScore;
      userChoices.style["pointer-events"] = "all";
      startGame();
    }, 500);
  }
}

//playGame();
