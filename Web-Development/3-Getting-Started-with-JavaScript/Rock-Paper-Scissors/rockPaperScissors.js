const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Invalid choice');
    }
};

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'The user won!';
        } else {
            return 'The computer won!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'The user won!';
        } else {
            console.log('The computer won!');
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'The user won!';
        } else {
            return 'The computer won!';
        }
    }
};

function playGame() {
    const userChoice = getUserChoice('rock'); // <- WRITE USER CHOICE
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();