let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3)
    if (computerChoice == 0) {
        return "rock"
    } else if (computerChoice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper, Scissors: ")
    let userInputLower = userInput.toLowerCase()
    /*if ((userInputLower != "rock")|| (userInputLower != "paper") || (userInputLower != "scissors") ) {
        return "Invalid Input"
    } else {
        return userInputLower;
    }*/
   return userInputLower;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Its a tie! You both played ${humanChoice}.`)
        //return "tie"
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors")||
        (humanChoice == "paper" && computerChoice == "rock")||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
            //return "player";
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            //return "computer"
        }

}
console.log(playRound(humanChoice,computerChoice))






/*Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.*/