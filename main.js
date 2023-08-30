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
  // Return 1 if the player wins, 0 if the CPU wins, and -1 if it's a draw.
  if (playerSelection === computerSelection) {
    return -1;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return 1;
  } else {
    return 0;
  }
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  let playerPrint = capitaliseFirstLetter(playerSelection);
  let computerPrint = capitaliseFirstLetter(computerSelection);
  let result;

  if (playerWins !== 5 && cpuWins !== 5) {
    result = playRound(playerSelection, computerSelection);

    if (result === 1) {
      resultText.textContent = `You win! ${playerPrint} beats ${computerPrint}.`;
      playerWins++;
    } else if (result === 0) {
      resultText.textContent = `You lose! ${computerPrint} beats ${playerPrint}.`;
      cpuWins++;
    } else if (result === -1) {
      resultText.textContent = `Draw! ${playerPrint} vs ${computerPrint}.`;
    }

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
