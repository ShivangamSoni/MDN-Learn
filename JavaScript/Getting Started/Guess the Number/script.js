let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessesLeft = document.querySelector(".guessesLeft");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    if(guessCount !== 10){
        guesses.textContent += userGuess + ", ";
    } else {
        guesses.textContent += userGuess + ".";
    }

    if(userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it Right!";
        lastResult.style.backgroundColor = "chartreuse";
        lowOrHi.textContent = "";
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = "!!! Game OVER !!!";
        setGameOver();
    } else {
        lastResult.textContent = "WRONG!!";
        lastResult.style.backgroundColor = "firebrick";
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last Guess Was Too Low!';
        } else {
            lowOrHi.textContent = 'Last Guess Was Too High!';
        }
    }

    guessesLeft.textContent = 10 - guessCount;
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start New Game";
    document.querySelector('.main').append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for(let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessesLeft.textContent = 10;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'initial';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}