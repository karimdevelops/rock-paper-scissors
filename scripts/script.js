let menu = document.querySelector(".menu");
let menuButton = document.querySelector("#menuBtn");
let finalResult = document.querySelector("#finalResult");

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

menuButton.addEventListener("click", startGame);

userChoices.addEventListener("click", (choice) => {
  humanChoice = choice.target.id;
  if (choices.includes(humanChoice)) {
    computerChoice = getComputerChoice();
    playGame(humanChoice, computerChoice);
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

function winner() {
  finalResult.style.color = "#005f73";
  return "You win!";
}

function loser() {
  finalResult.style.color = "#AE2012";
  return "You lose!";
}

function playGame(humanChoice, computerChoice) {
  let resultText;
  let finalText;
  if (humanScore < 5 && computerScore < 5) {
    resultText = playRound(humanChoice, computerChoice);
    score.textContent = `User score: ${humanScore} - Computer score: ${computerScore}`;
    result.textContent = "Result: " + resultText;
    console.log(humanScore, computerScore);
  }
  if (humanScore == 5 || computerScore == 5) {
    finalText = humanScore > computerScore ? winner() : loser();
    finalResult.textContent = finalText;
    humanScore = 0;
    computerScore = 0;
    userChoices.style["pointer-events"] = "none";
    setTimeout(() => {
      result.textContent = "Result: ";
      score.textContent = `User score: ${humanScore} - Computer score: ${computerScore}`;
      userChoices.style["pointer-events"] = "all";
      startGame();
    }, 1000);
  }
}

//playGame();
