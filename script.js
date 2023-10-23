function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    let choice = `nothing`;
    
    switch (randomNumber) {
        case 1:
            choice = `Rock`;
            break;
        case 2:
            choice = `Paper`;
            break;
        case 3:
            choice = `Scissors`;
            break;
        default:
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== null) {
        playerSelection = playerSelection.toLowerCase();
    }
    computerSelection = computerSelection.toLowerCase();

    let outcome = `nothing`;

    if (playerSelection === computerSelection) {
        outcome = `You Tie!`;
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
        outcome = `You Lose! Paper beats Rock`;
    } else if (playerSelection === `rock` && computerSelection === `scissors`) {
        outcome = `You Win! Rock beats Scissors`;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        outcome = `You Win! Paper beats Rock`;
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        outcome = `You Lose! Scissors beats Paper`;
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        outcome = `You Lose! Rock beats Scissors`;
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        outcome = `You Win! Scissors beats Paper`;
    } else {
        outcome = `nothing`
    }

    return outcome;
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    
    let playerSelection = document.querySelector(`#choice`);

    playerSelection.addEventListener(`click`, (event) => {
        alert(`dd`);
    })

    //violation solved using observers
    let computerSelection = getComputerChoice();

    const outcome = playRound(playerSelection, computerSelection);
    console.log(outcome);

    const result = outcome.slice(0, 8);
    
    switch (result) {
        case `You Win!`:
            playerScore++;
            break;
        case `You Lose`:
            computerScore++;
            break;
        case `You Tie!`:
            break;
        default:
            break;
    }

    let victor = `no one`;
    if (playerScore > computerScore) {
        victor = `Player wins game ${playerScore} to ${computerScore}!`;
    } else if (playerScore < computerScore) {
        victor = `Computer wins game ${computerScore} to ${playerScore}!`
    } else {
        victor = `Tie with ${playerScore}!`
    }

    console.log(victor);
}

game();