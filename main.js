const DRAW = 0;
const PLAYER_WINS = 1;
const CPU_WINS = 2;

function capitalizeFirstLetter(s) {
  let newString = s.slice(0, 1);
  newString = newString.toUpperCase();
  newString += s.slice(1);
  return newString;
}

// * Make a function that plays 5 rounds in a row.
function playGame() {
  let playerMove;
  let cpuMove;
  let roundResult;

  let playerScore = 0;
  let cpuScore = 0;

  for (let i = 0; i < 5; i++) {
    playerMove = getPlayerChoice();
    cpuMove = getComputerChoice();
    roundResult = playRound(playerMove, cpuMove);

    // * Print a sentence that tells the user who's the winner.
    switch (roundResult) {
      case DRAW:
        playerScore++;
        cpuScore++;
        console.log(`Draw! ${capitalizeFirstLetter(playerMove)} vs ${cpuMove}.`);
        break;
      case PLAYER_WINS:
        playerScore++;
        console.log(`You win this round! ${capitalizeFirstLetter(playerMove)} beats ${cpuMove}.`);
        break;
      case CPU_WINS:
        cpuScore++;
        console.log(`You lose this round! ${capitalizeFirstLetter(cpuMove)} beats ${playerMove}.`);
        break;
    }

    // * Print the scores after playing each round.
    console.log(`You: ${playerScore} CPU: ${cpuScore}`);
  }

  // * Determine who's the winner after the 5 rounds have been played.
  // * Print a message that informs the user who's the overall winner.
  if (playerScore === cpuScore) {
    console.log("This game is a draw!");
  } else if (playerScore > cpuScore) {
    console.log("You won this game!");
  } else {
    console.log("You lost this game!");
  }
}

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
    } else {
      alert("Please enter a valid move.");
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
