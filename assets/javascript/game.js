// Game script

// Alphabet in array, shamelessly pulled off: https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-alphabet-in-jquery
const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Global variables.
var playerChoice = "";
var playerChoiceArray=[];
var computerChar = "";
var wins = 0;
var games = 0;
var choicesLeft = 0;

var roundsElement = document.getElementById("game-round");
var guessesLeftElement = document.getElementById("guesses-left");
var lettersGuessedElement = document.getElementById("letters-guessed");
var playerWinsElement = document.getElementById("player-wins");
var totalGamesElement = document.getElementById("total-games");

// Resets the current game (global) variables.
function startRound() {
    choicesLeft = 5;
    computerChar = lowerAlph[Math.floor(Math.random() * lowerAlph.length)];
    console.log("The computer chooses " + computerChar);
    roundsElement.textContent = ++games;
    guessesLeftElement.textContent = choicesLeft;
    lettersGuessedElement.textContent = "";
}

startRound();

document.onkeyup = function(event) {
    playerChoice = event.key.toLowerCase();
    if (playerChoice === computerChar) {
        alert("You guessed it!");
        playerWinsElement.textContent = ++wins;
        totalGamesElement.textContent = games;    // Already incremented (and displayed as 'round')
        startRound();
    }
    else if (choicesLeft-- > 0) {
        lettersGuessedElement.textContent += playerChoice + ",";
        alert("Nope.");
        guessesLeftElement.textContent = choicesLeft;
    }
    else {
        alert("You ran out of guesses...");        
        totalGamesElement.textContent = games;    // Already incremented (and displayed as 'round')
        startRound();
    }
}