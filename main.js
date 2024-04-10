// * Print a sentence that tells the user who's the winner.
// * Make a function that plays 5 rounds in a row.
// * Print the scores after playing each round.
// * Determine who's the winner after the 5 rounds have been played.
// * Print a message that informs the user who's the overall winner.

// * Ask the user for input, so that they can make a move.
function getPlayerChoice() {
  // * Make a variable the stores the user's move.
  let move;
  let keepGoing = true;
  while (keepGoing) {
    // * Store the player's move in its variable.
    move = prompt("Enter your move, 'rock', 'paper' or 'scissors':");
    // * Normalise the user's input letter case, so that they can type their move
    // however they want.
    move = move.toLowerCase();
    // * Ask for user input again if they didn't input a valid move.
    if (move === "rock" || move === "paper" || move === "scissors") {
      keepGoing = false;
    }
  }
  return move;
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
    move = "rock";
  } else if (num <= 0.6666) {
    move = "paper";
  } else {
    move = "scissors";
  }
  return move;
}

// * Make a function that plays a round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
  let gameResult;
  // * Compare both variables and decide who's the winner according to the game's
  // rules.
  if (playerSelection === computerSelection) {
    gameResult = `${playerSelection} vs ${computerSelection}. It's a draw!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    gameResult = `${playerSelection} vs ${computerSelection}. Player wins!`;
  }
  return gameResult;
}
