function getComputerChoice() {
    let choice = Math.random()
    choice = Number(choice.toFixed(4))

    if (choice <= 0.3333) {
        return "rock";
    }
    else if (choice <= 0.6666) {
        return "paper";
    }
    else if (choice <= 0.9999) {
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

    let playerPrint = capitaliseFirstLetter(playerSelection);
    let computerPrint = capitaliseFirstLetter(computerSelection);

    if (playerSelection === computerSelection) {
        return `Draw! ${playerPrint} vs ${computerPrint}.`;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
             || (playerSelection === "paper" && computerSelection === "rock")
             || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerPrint} beats ${computerPrint}.`;
    }
    else {
        return `You lose! ${computerPrint} beats ${playerPrint}.`;
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`)

        playerSelection = prompt("Rock, paper or scissors? ");
        computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
