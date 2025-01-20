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
    let humanChoice = "rock";
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    let humanChoice = "rock";
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    let humanChoice = "rock";
    playRound("scissors");
});

resetBtn.addEventListener("click", () => {
    restartGame();
});


//FUNCTiONS
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
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
    }
}

function playGame() {

}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    displayHeading.textContent = "Choose your weapon";
    subHeading.textContent = "First to 5 wins!"
}

playGame();






/*
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
*/



