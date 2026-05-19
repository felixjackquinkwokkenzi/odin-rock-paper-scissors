const choice = 3;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * choice) + 1;
  return random;
}

function getHumanChoice() {
  let choice = prompt("Please enter rock, paper, or scissors");
  return choice;
}
