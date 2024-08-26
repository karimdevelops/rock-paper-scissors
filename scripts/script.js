let choices = ["rock", "paper", "scissors"];
let totalChoices = choices.length;
let computerChoice = getComputerChoice();

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * totalChoices);
  let choice = choices[randomChoice];
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter a choice (rock, paper, scissors)").toLowerCase();
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

console.log(getHumanChoice());
