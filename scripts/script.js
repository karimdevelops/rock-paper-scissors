let choices = ["rock", "paper", "scissors"];
let score = document.querySelector("#score");
let userChoices = document.querySelector("#userChoices");
let totalChoices = choices.length;
let totalRounds = 5;

let humanScore = 0;
let computerScore = 0;

let computerChoice;
let humanChoice;

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

function checkChoice(choice) {
  for (let i = 0; i < totalChoices; i++) {
    if (choice == choices[i]) {
      return true;
    }
  }
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case computerChoice:
      console.log(`Draw! ${humanChoice} does not beat ${computerChoice}.`);
      break;
    case "rock":
      if (computerChoice == "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      } else if (computerChoice == "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      }
      break;
    case "paper":
      if (computerChoice == "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      } else if (computerChoice == "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      }
      break;
    case "scissors":
      if (computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
      } else if (computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
      }
      break;
  }
}

function playGame(humanChoice, computerChoice) {
  if (humanScore < 5 && computerScore < 5) {
    playRound(humanChoice, computerChoice);
    score.textContent = `User score: ${humanScore} - Computer score: ${computerScore}`;
  }
  /*if (humanScore == computerScore) {
    console.log("Draw.");
  } else {
    let winner = humanScore > computerScore ? "You won!" : "You lost...";
    console.log(winner);
  }*/
}

//playGame();
