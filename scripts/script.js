let computerChoice = getComputerChoice();

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let totalChoices = choices.length;
  let randomChoice = Math.floor(Math.random() * totalChoices);
  let choice = choices[randomChoice];
  return choice;
}
