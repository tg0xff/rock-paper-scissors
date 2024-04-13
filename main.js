const DRAW = 0;
const PLAYER_WINS = 1;
const CPU_WINS = 2;
const ROCK = 2;
const PAPER = 3;
const SCISSORS = 5;

let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;

const button = document.querySelector("#buttons");
button.addEventListener("click", playGame);
const results = document.querySelector("#results");

function capitalizeFirstLetter(s) {
  let newString = s.slice(0, 1);
  newString = newString.toUpperCase();
  newString += s.slice(1);
  return newString;
}

// * Make a function that plays 5 rounds in a row.
function playGame(e) {
  // * Ask the user for input, so that they can make a move.
  // * Make a variable the stores the user's move.
  // * Store the player's move in its variable.
  let playerMove = e.target.getAttribute("id");

  switch (playerMove) {
  case "r":
    playerMove = ROCK;
    break;
  case "p":
    playerMove = PAPER;
    break;
  case "s":
    playerMove = SCISSORS;
    break;
  }

  // * Ignore user input if they didn't input a valid move.
  if (
    playerMove !== "rock" &&
    playerMove !== "paper" &&
    playerMove !== "scissors"
  ) {
    return;
  }

  let cpuMove = getComputerChoice();
  let roundResult = playRound(playerMove, cpuMove);

  // * Print a sentence that tells the user who's the winner.
  switch (roundResult) {
    case DRAW:
      playerScore++;
      cpuScore++;
      results.textContent = `Draw! ${capitalizeFirstLetter(playerMove)} vs ${cpuMove}.`;
      break;
    case PLAYER_WINS:
      playerScore++;
      results.textContent = `You win this round! ${capitalizeFirstLetter(playerMove)} beats ${cpuMove}.`;
      break;
    case CPU_WINS:
      cpuScore++;
      results.textContent = `You lose this round! ${capitalizeFirstLetter(cpuMove)} beats ${playerMove}.`;
      break;
  }

  // * Print the scores after playing each round.
  results.innerHTML += `<br>You: ${playerScore} CPU: ${cpuScore}`;

  // * Determine who's the winner after the 5 rounds have been played.
  // * Print a message that informs the user who's the overall winner.
  if (roundsPlayed < 4) {
    roundsPlayed++;
  } else {
    if (playerScore === cpuScore) {
      results.innerHTML += "<br>This game is a draw!";
    } else if (playerScore > cpuScore) {
      results.innerHTML += "<br>You won this game!";
    } else {
      results.innerHTML += "<br>You lost this game!";
    }
    results.innerHTML += "<br>Click any button to start a new game!";
    roundsPlayed = 0;
    playerScore = 0;
    cpuScore = 0;
  }
}

function getComputerChoice() {
  // * Make a variable the stores the CPU's move.
  let move;
  // * Generate a random number.
  let num = Math.random();
  num = num.toFixed(4);
  // * Use that random number to determine the CPU's move.
  // * Store the CPU's move in its variable.
  if (num <= 0.3333) {
    move = ROCK;
  } else if (num <= 0.6666) {
    move = PAPER;
  } else {
    move = SCISSORS;
  }
  return move;
}

// * Make a function that plays a round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
  let gameResult;
  // * Compare both variables and decide who's the winner according to the game's
  // rules.
  if (playerSelection === computerSelection) {
    gameResult = DRAW;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    gameResult = PLAYER_WINS;
  } else {
    gameResult = CPU_WINS;
  }
  return gameResult;
}
