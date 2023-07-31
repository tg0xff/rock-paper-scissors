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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} vs ${computerSelection}.`;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
             || (playerSelection === "paper" && computerSelection === "rock")
             || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
