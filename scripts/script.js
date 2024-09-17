let menu = document.querySelector(".menu");
let menuButton = document.querySelector("#menuBtn");

let main = document.querySelector(".main");

let choices = ["rock", "paper", "scissors"];
let totalChoices = choices.length;

let score = document.querySelector("#score");
let userChoices = document.querySelector("#userChoices");
let result = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

let computerChoice;
let humanChoice;

menuButton.addEventListener("click", () => {
  menu.remove();
  main.classList.toggle("inactive");
});

userChoices.addEventListener("click", (choice) => {
  humanChoice = choice.target.id;
  computerChoice = getComputerChoice();
  playGame(humanChoice, computerChoice);
});

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * totalChoices);
  let choice = choices[randomChoice];
  return choice;
}
function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case computerChoice:
      return `Draw! ${humanChoice} does not beat ${computerChoice}.`;
      break;
    case "rock":
      if (computerChoice == "scissors") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
      } else if (computerChoice == "paper") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
      }
      break;
    case "paper":
      if (computerChoice == "rock") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
      } else if (computerChoice == "scissors") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
      }
      break;
    case "scissors":
      if (computerChoice == "paper") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
      } else if (computerChoice == "rock") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
      }
      break;
  }
}

function playGame(humanChoice, computerChoice) {
  if (humanScore < 5 && computerScore < 5) {
    resultText = playRound(humanChoice, computerChoice);
    score.textContent = `User score: ${humanScore} - Computer score: ${computerScore}`;
    result.textContent = "Result: " + resultText;
  }
}

//playGame();
