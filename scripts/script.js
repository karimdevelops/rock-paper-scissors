let choices = ["rock", "paper", "scissors"];
let totalChoices = choices.length;
let totalRounds = 5;

let humanScore = 0;
let computerScore = 0;

let computerChoice;
let humanChoice;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * totalChoices);
  let choice = choices[randomChoice];
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter a choice (rock, paper, scissors)");
  choice = choice == null ? " " : choice.toLowerCase();
  let choiceExists = checkChoice(choice);
  while (!choiceExists) {
    choice = prompt(
      "Invalid choice!\nEnter a choice again (rock, paper, scissors).",
    );
    choiceExists = checkChoice(choice);
  }
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

function playGame() {
  for (let i = 0; i < totalRounds; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(`Your score: ${humanScore} - Computer score: ${computerScore}`);
  if (humanScore == computerScore) {
    console.log("Draw.");
  } else {
    let winner = humanScore > computerScore ? "You won!" : "You lost...";
    console.log(winner);
  }
}

playGame();
