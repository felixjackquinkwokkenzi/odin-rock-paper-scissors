const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const roundResult = document.querySelector(".result");
const matchResult = document.querySelector(".final-result");
const resetBtn = document.querySelector("#btn-reset");

let humanPoint = 0;
let computerPoint = 0;
const targetScore = 5;

if (rockBtn) {
  rockBtn.addEventListener("click", () => {
    playGame("rock");
  });
}

if (paperBtn) {
  paperBtn.addEventListener("click", () => {
    playGame("paper");
  });
}

if (scissorsBtn) {
  scissorsBtn.addEventListener("click", () => {
    playGame("scissors");
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", resetGame);
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  let message = "";

  roundResult.classList = "result";

  if (humanChoice === computerChoice) {
    message = `It's a Tie! Both chose ${humanChoice}`;
    roundResult.classList.add("text-tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanPoint++;
    message = `You Win! ${humanChoice} beats ${computerChoice}`;
    roundResult.classList.add("text-win");
  } else {
    computerPoint++;
    message = `You Lose! ${computerChoice} beats ${humanChoice}`;
    roundResult.classList.add("text-lose");
  }

  if (playerScore) {
    playerScore.textContent = humanPoint;
  }

  if (computerScore) {
    computerScore.textContent = computerPoint;
  }

  roundResult.textContent = message;
}

function playGame(humanChoice) {
  if (humanPoint >= targetScore || computerPoint >= targetScore) {
    return;
  }

  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  if (humanPoint === targetScore || computerPoint === targetScore) {
    endGame();
  }
}

function endGame() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  matchResult.className = "final-result";

  if (humanPoint > computerPoint) {
    matchResult.textContent = `🏆 Match Over! You defeated the computer ${humanPoint} - ${computerPoint}!`;
    matchResult.classList.add("text-win");
  } else {
    matchResult.textContent = `💀 Match Over! The computer defeated you ${computerPoint} - ${humanPoint}.`;
    matchResult.classList.add("text-lose");
  }

  if (resetBtn) {
    resetBtn.style.display = "block";
  }
}

function resetGame() {
  humanPoint = 0;
  computerPoint = 0;

  if (playerScore) {
    playerScore.textContent = "0";
  }

  if (computerScore) {
    computerScore.textContent = "0";
  }

  roundResult.className = "result";
  roundResult.textContent = "Choose your weapon to start!";

  matchResult.className = "final-result";
  matchResult.textContent = "";

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  if (resetBtn) {
    resetBtn.style.display = "none";
  }
}
