let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper, Scissors: ");
    let userInputLower = userInput.toLowerCase();
    while (userInputLower !== "rock" && userInputLower !== "paper" && userInputLower !== "scissors") {
        userInput = prompt("Invalid input. Please enter Rock, Paper, or Scissors: ");
        userInputLower = userInput.toLowerCase();
    }
    return userInputLower;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It's a tie! You both played ${humanChoice}.`);
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Round ${i}: Human Score - ${humanScore}, Computer Score - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        alert("You win the game!");
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        alert("You lose the game!");
        console.log("You lose the game!");
    } else {
        alert("The game is a tie!");
        console.log("The game is a tie!");
    }
}

playGame();