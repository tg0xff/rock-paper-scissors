// * Generate a random number.
// * Use that random number to determine the CPU's move.
// * Store the CPU's move in its variable.
// * Compare both variables and decide who's the winner according to the game's
// rules.
// * Print a sentence that tells the user who's the winner.
// * Make a function that plays 5 rounds in a row.
// * Print the scores after playing each round.
// * Determine who's the winner after the 5 rounds have been played.
// * Print a message that informs the user who's the overall winner.

// * Make a function that plays a round of rock paper scissors.
function playRound() {
  let gameResult;
  // * Make a variable the stores the user's move.
  let playerMove;
  // * Make a variable the stores the CPU's move.
  let cpuMove;
  // * Ask the user for input, so that they can make a move.
  let keepGoing = true;
  while (keepGoing) {
    // * Store the player's move in its variable.
    playerMove = prompt("Enter your move, 'rock', 'paper' or 'scissors':");
    // * Normalise the user's input letter case, so that they can type their move
    // however they want.
    playerMove = playerMove.toLowerCase();
    // * Ask for user input again if they didn't input a valid move.
    if (playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
      keepGoing = false;
    }
  }
  return gameResult;
}
