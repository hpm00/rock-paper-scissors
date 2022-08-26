// create three buttons 
buttons = document.getElementById('button-row');

for (let i = 0; i < 3; i++) {
    const btn = document.createElement('button');
    btn.classList = `button-${i}`;
    btn.setAttribute = 'button'
    if (btn.classList.contains('button-0')) {
        btn.appendChild(document.createTextNode('ROCK'));
    }
    else if (btn.classList.contains('button-1')) {
        btn.appendChild(document.createTextNode('PAPER'));
    }
    else {
        btn.appendChild(document.createTextNode('SCISSORS'));
    }
    buttons.appendChild(btn);
};


// computer selection
const selection = ['rock', 'paper', 'scissors'];
function ComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

// DOM elements 
const header = document.getElementById('header');
const newCaption = document.createElement('h3');
newCaption.classList = 'score-caption';

let playerScore = 0;
let computerScore = 0;
let draws = 0;

// player selection is button clicked; create round of game
buttons.addEventListener('click', (e) => {
    let computerSelection = ComputerChoice().toUpperCase();
    let playerSelection = e.target.firstChild.wholeText;

    if (playerSelection == computerSelection) {
        displayResults("It's a tie! You both choose " + playerSelection + "! Frodo is counting on you. We must collect 5 wins!")
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' || 
    playerSelection == 'SCISSORS' && computerSelection == 'PAPER' ||
    playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        displayResults("Perfect, " + playerSelection + " beats " + computerSelection +
        "! Gollum is getting nervous....")

        playerScore += 1

        const userScore = document.getElementById('score-row');
        childDiv = userScore.getElementsByTagName('h4')[1]
        const h4 = document.createElement('h4');
        h4.textContent = `Your score: ${playerScore}`;
        userScore.replaceChild(h4, childDiv)
    }
    else {
        displayResults("Shucks! His " + computerSelection + " beat your " + playerSelection +
        ' keep on trying!')
        computerScore += 1

        const score = document.getElementById('score-row');
        childDiv = score.getElementsByTagName('h4')[0]
        const h4 = document.createElement('h4');
        h4.textContent = `Gollum's score: ${computerScore}`;
        score.replaceChild(h4, childDiv)
    }
    popAnnouncement();
})

// displaying what was selected and who won the round
function displayResults(str) {
    const captions = document.getElementById('results-container');
    captions.style.fontFamily = "'Courier New', Courier, monospace";
    captions.style.textAlign = 'center';
    captions.style.fontSize = '20px';
    captions.style.fontWeight = 'bold';
    captions.style.color = 'red';
    captions.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
    captions.textContent = str;
  }

// create display scores
scoreBoard = document.getElementById('score-row');

for (let i = 0; i < 2; i++) {
    const score = document.createElement('h4');
    score.classList = `score-${i}`
    score.setAttribute = 'score'
    if (score.classList.contains('score-0')) {
        score.appendChild(document.createTextNode("Gollum's Score: "));
    }
    else {
        score.appendChild(document.createTextNode("Your Score: "));
    }
    scoreBoard.appendChild(score);
}

// DOM Elements
const popUp = document.getElementById('popup-1');
const content = document.getElementById('content');

// Announce winner after achieving 5 points 
function popAnnouncement() {
    if (playerScore == 5 || computerScore == 5)
    {
        popUp.style.display = 'block'; 
        if (playerScore > computerScore) 
        {
            const para = document.createElement('p');
            para.textContent = 'FRODO'
            para.style.fontSize = '50px';
            content.insertBefore(para, content.children[3]);

            playAudio();
        }
        else {
            const para = document.createElement('p');
            para.textContent = 'GOLLUM'
            para.style.fontSize = '50px';
            content.insertBefore(para, content.children[3]);

            playMusic();
        }
    }
 };


// play audio when user wins
const audio = document.getElementById('winner-audio');
function playAudio() {
    audio.play();
};
const audio1 = document.getElementById('loser-audio');
function playMusic() {
    audio1.play();
}


// delete pop up page
//const delBtn = document.getElementById('close-btn');
//delBtn.addEventListener('click', (e) => {
    //popUp.style.display = 'none';
//})

// reload page
const playAgain = document.getElementById('play-again');
playAgain.addEventListener('click', (e) => {
    location.reload();
})

