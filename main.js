let rounds = 0;
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
  playerSelection = playerSelection.toLowerCase();

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

  if (rounds < 5) {
    result = playRound(playerSelection, computerSelection);

    if (result === 1) {
      resultText.textContent = `You win! ${playerPrint} beats ${computerPrint}.`;
      playerWins++;
    } else if (result === 0) {
      resultText.textContent = `You lose! ${computerPrint} beats ${playerPrint}.`;
      cpuWins++;
    } else if (result === -1) {
      resultText.textContent = `Draw! ${playerPrint} vs ${computerPrint}.`;
      playerWins++;
      cpuWins++;
    }

    playerScore.textContent = playerWins;
    cpuScore.textContent = cpuWins;
  } else if (rounds === 5) {
    if (playerWins > cpuWins) {
      resultText.textContent = "Player wins!";
    } else if (cpuWins > playerWins) {
      resultText.textContent = "CPU wins!";
    } else if (playerWins === cpuWins) {
      // Unlikely to happen, but worth considering nonetheless.
      resultText.textContent = "It's a draw!";
    }
  }

  rounds++;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => game(e.target.textContent));
});
