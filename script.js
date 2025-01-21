//VARIABLES
let humanScore = 0;
let computerScore = 0;

//QUERY SELECTORS
const displayHeading = document.querySelector("#display-heading");
const subHeading = document.querySelector("#sub-heading");

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const resetBtn = document.querySelector("#reset-btn")


//EVENT LISTENERS
rockBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorsBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});

resetBtn.addEventListener("click", () => {
    restartGame();
});

//FUNCTiONS
function getComputerChoice() {
    let computerChoiceRand = Math.floor(Math.random() * 3);
    if (computerChoiceRand == 0) {
        return "rock";
    } else if (computerChoiceRand == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        displayHeading.textContent = "Its a tie!",
        subHeading.textContent = `you both played ${humanChoice}`
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++
        displayHeading.textContent = `You win!`,
        subHeading.textContent = `${humanChoice} beats ${computerChoice}`
    } else {
        computerScore++
        displayHeading.textContent = `You lose!`,
        subHeading.textContent = `${computerChoice} beats ${humanChoice}`
    };

    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
};

function playGame() {
    restartGame();
    while (humanScore <= 5 && computerScore <= 5) {
    playRound(humanChoice, getComputerChoiceChoice());
    declareWinner();
   }   
};

function declareWinner(humanScore, computerScore) {
    if (humanScore === 5) {
        displayHeading.textContent = "You are the winner"
        subHeading.textContent = `You won ${humanScore} to ${computerScore}`
    } else if (computerScore === 5) {
        displayHeading.textContent = "You are the loser"
        subHeading.textContent = `You lost ${computerScore} to ${humanScore}`
    }; 
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0
    computerScoreDisplay.textContent = 0
    displayHeading.textContent = "Choose your weapon";
    subHeading.textContent = "First to 5 wins!"
}

playGame();

