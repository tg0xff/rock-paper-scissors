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
