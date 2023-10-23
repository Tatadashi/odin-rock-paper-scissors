function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    let choice = `nothing`;
    
    switch (randomNumber) {
        case 1:
            choice = `rock`;
            break;
        case 2:
            choice = `paper`;
            break;
        case 3:
            choice = `scissors`;
            break;
        default:
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let outcome = `nothing`;

    if (playerSelection === computerSelection) {
        outcome = `You Tie! (${playerSelection})!`;
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
        outcome = `You Lose! Paper beats Rock!`;
    } else if (playerSelection === `rock` && computerSelection === `scissors`) {
        outcome = `You Win! Rock beats Scissors!`;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        outcome = `You Win! Paper beats Rock!`;
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        outcome = `You Lose! Scissors beats Paper!`;
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        outcome = `You Lose! Rock beats Scissors!`;
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        outcome = `You Win! Scissors beats Paper!`;
    } else {
        outcome = `nothing`
    }

    return outcome;
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    //while (playerScore < 5 && computerScore < 5) {
        let option = document.querySelector(`#options`);

        option.addEventListener(`click`, (event) => {
            let playerSelection = event.target;

            // only want id of button being clicked
            playerSelection = playerSelection.id;

            //prevent clicking on div triggering onclick
            if (playerSelection !== `options`) {
                const computerSelection = getComputerChoice();

                const outcome = playRound(playerSelection, computerSelection);

                //replace with dom edit div id results
                let result = document.querySelector(`#result`);
                result.textContent = outcome;

                const outcomeInfo = outcome.slice(0, 8);
                
                switch (outcomeInfo) {
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
            }
        })
    //}

    // let victor = `no one`;
    // if (playerScore > computerScore) {
    //     victor = `Player wins game ${playerScore} to ${computerScore}!`;
    // } else if (playerScore < computerScore) {
    //     victor = `Computer wins game ${computerScore} to ${playerScore}!`
    // } else {
    //     victor = `Tie with ${playerScore}!`
    // }

    // console.log(victor);
}

game();