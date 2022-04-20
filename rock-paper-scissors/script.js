let computerChoices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result.toLowerCase();
  }

function eligeJugador() {
    playerChoice = prompt("Please choose: Rock, Paper, Scissors")
    playerChoice = playerChoice.toLowerCase()
    if(computerChoices.includes(playerChoice)) {
        return playerChoice
    }
    else {
        alert("Error, must choose only between Rock, Paper, Scissors. You lost this chance!")
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice.toLowerCase()) {
        console.log("It's a draw")
    }
    if ((playerChoice == "rock" && computerChoice.toLowerCase() == "scissors") ||
    (playerChoice == "paper" && computerChoice.toLowerCase() == "rock")) {
        playerScore++
        console.log(`You win, ${playerChoice} beats ${computerChoice}`)
    }
    if ((computerChoice.toLowerCase() == "rock" && playerChoice == "scissors") ||
    (computerChoice.toLowerCase() == "paper" && playerChoice == "rock")) {
        compScore++
        console.log(`You lose, ${computerChoice} beats ${playerChoice}`)
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerChoice = computerPlay()
        playerChoice = eligeJugador()
        playRound(playerChoice, computerChoice)
        console.log(`El resultado es Jugador: ${playerScore}, Maquina: ${compScore}`)
     }
}