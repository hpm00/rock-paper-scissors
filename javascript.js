const selection = ['rock', 'paper', 'scissors'];

function userChoice() {
    let answer = prompt("Choose Rock, Paper, or Scissors: ", '');
    return answer.toLowerCase();
}

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

const computerSelection = getComputerChoice();
const playerSelection = userChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("It's a tie. You both chose " + playerSelection)
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'scissors' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'rock') {
        alert("You win! " + playerSelection + " beats " + computerSelection)
    }
    else if (playerSelection == ''|| playerSelection !== 'rock', 'paper', 'scissors') {
        alert("Invalid")
    }
    else {
        alert("You lose! " + computerSelection + " beats " + playerSelection)
    }
}

function game() {
    for (i = 0; i<5; i++) {
        function playRound()
    }
}

console.log(playRound(playerSelection,computerSelection))

// play 5 rounds // MEDIUM
// display winner at the end of the 5 rounds // point system HARDEST