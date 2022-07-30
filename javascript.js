const selection = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

getComputerChoice();

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose Rock, Paper, or Scissors: ", '').toLowerCase();

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(++draws)
        console.log("It's a tie. You both chose " + playerSelection + "." + " Score: " +
        "Tie: " + draws + " Computer: " + computerScore + " You: " + playerScore)
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'scissors' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(++playerScore)
        console.log("You win! " + playerSelection + " beats " + computerSelection + 
        "." + " Score: " + "Tie: " + draws + " Computer: " + computerScore +
         " You: " + playerScore)
    }
    else {
        console.log(++computerScore)
        console.log("You lose! " + computerSelection + " beats " + playerSelection +
        " ." + " Score: " + "Tie: " + draws + " Computer: " + computerScore +
         " You: " + playerScore)
    }
}

playRound();

function game() {
    for (i = 0; i<5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors: ", '').toLowerCase();
        console.log(getComputerChoice())
        console.log(playRound(playerSelection, computerSelection))
        console.log("your score = " + playerScore)
        console.log("Computer's score = " + computerScore)
    }
}

game();