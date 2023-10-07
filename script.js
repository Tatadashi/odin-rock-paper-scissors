function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;

    choice = "nothing";
    
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