let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerAnswer = Math.floor(Math.random() * 3) + 1
    if (computerAnswer == 1){
        return "Rock"
    } else if (computerAnswer == 2){
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper or Scissors: ")
    return userInput;
}


/*
Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as 
arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer 
choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.
Example code:

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/
function playRound(humanChoice, computerChoice) {

}


/*
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of 
the scores and declares a winner at the end.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing 
the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice 
functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return 
values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.*/

function playGame() {

}