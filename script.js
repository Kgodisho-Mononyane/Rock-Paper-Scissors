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

});

paperBtn.addEventListener("click", () => {

});

scissorsBtn.addEventListener("click", () => {

});

resetBtn.addEventListener("click", () => {

});


//FUNCTiONS



/* Add an event listener to the buttons that call 
your playRound function with the correct playerSelection 
every time a button is clicked. (you can keep the console.logs 
for this step)*/




// function getComputerChoice() {
//     let computerChoice = Math.floor(Math.random() * 3);
//     if (computerChoice == 0) {
//         return "rock";
//     } else if (computerChoice == 1) {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }

// function getHumanChoice() {
//     let userInput = prompt("Rock, Paper, Scissors: ");
//     let userInputLower = userInput.toLowerCase();
//     while (userInputLower !== "rock" && userInputLower !== "paper" && userInputLower !== "scissors") {
//         userInput = prompt("Invalid input. Please enter Rock, Paper, or Scissors: ");
//         userInputLower = userInput.toLowerCase();
//     }
//     return userInputLower;
// }

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == computerChoice) {
//         display.textContent = `It's a tie! You both played ${humanChoice}.`
//     } else if (
//         (humanChoice == "rock" && computerChoice == "scissors") ||
//         (humanChoice == "paper" && computerChoice == "rock") ||
//         (humanChoice == "scissors" && computerChoice == "paper")
//     ) {
//         humanScore++;
//         display.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
//     } else {
//         computerScore++;
//         display.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
//     }
// }

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
// playGame();


//Current year

