function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    let choice = "nothing";
    
    switch (randomNumber) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
        default:
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let outcome = "nothing";

    if (playerSelection === computerSelection) {
        outcome = "Tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        outcome = "Computer wins round";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        outcome = "Player wins round";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        outcome = "Player wins round";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        outcome = "Computer wins round";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        outcome = "Computer wins round";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        outcome = "Player wins round";
    }

    return outcome;
}