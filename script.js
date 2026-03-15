const choices = ['rock', 'paper', 'scissors'];
const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');
const playerscore = document.getElementById('playerscore');
const computerscorevalue = document.getElementById('computerscorevalue');

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    
    if (playerchoice === computerchoice) {
        result = "It's a TIE!";
    }
    else {
        switch (playerchoice) {
            case 'rock':
                result = (computerchoice === 'scissors') ? "You WIN!" : "You LOSE!";
                break;
            case 'paper':
                result = (computerchoice === 'rock') ? "You WIN!" : "You LOSE!";
                break;
            case 'scissors':
                result = (computerchoice === 'paper') ? "You WIN!" : "You LOSE!";
                break;
        }
    }
    playerdisplay.textContent = `PLAYER: ${playerchoice.toUpperCase()}`;
    computerdisplay.textContent = `COMPUTER: ${computerchoice.toUpperCase()}`;
    resultdisplay.textContent = result;
  


    switch (result) {
        case "You WIN!":
            resultdisplay.style.color = 'green';
            playerScore++;
            playerscore.textContent = playerScore;
            break;
        case "You LOSE!":
            resultdisplay.style.color = 'red';
            computerScore++;
            computerscorevalue.textContent = computerScore;
            break;
        default:
            resultdisplay.style.color = 'black';
    }
}




