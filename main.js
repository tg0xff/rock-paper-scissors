let playerWins = 0;
let cpuWins = 0;
const resultText = document.querySelector("#result-text");
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");

function getComputerChoice() {
  let choice = Math.random();
  choice = Number(choice.toFixed(4));

  if (choice <= 0.3333) {
    return "rock";
  } else if (choice <= 0.6666) {
    return "paper";
  } else if (choice <= 0.9999) {
    return "scissors";
  }
}

function capitaliseFirstLetter(word) {
  let letter = word.charAt(0);
  let everythingElse = word.slice(1);
  letter = letter.toUpperCase();
  return letter + everythingElse;
}

function playRound(playerSelection, computerSelection) {
  let playerPrint = capitaliseFirstLetter(playerSelection);
  let computerPrint = capitaliseFirstLetter(computerSelection);

  if (playerSelection === computerSelection) {
    resultText.textContent = `Draw! ${playerPrint} vs ${computerPrint}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultText.textContent = `You win! ${playerPrint} beats ${computerPrint}.`;
    playerWins++;
  } else {
    resultText.textContent = `You lose! ${computerPrint} beats ${playerPrint}.`;
    cpuWins++;
  }
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerWins !== 5 && cpuWins !== 5) {
    result = playRound(playerSelection, computerSelection);
    playerScore.textContent = playerWins;
    cpuScore.textContent = cpuWins;
  }

  if (playerWins === 5) {
    resultText.textContent = "Player wins! Game over.";
  } else if (cpuWins === 5) {
    resultText.textContent = "CPU wins! Game over.";
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => game(e.target.id));
});
