let computerChoice = getComputerChoice();
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let totalChoices = choices.length;
  let randomChoice = Math.floor(Math.random() * totalChoices);
  let choice = choices[randomChoice];
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter a choice (rock, paper, scissors)");
  return choice;
}
