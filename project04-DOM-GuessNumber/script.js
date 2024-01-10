//need to generate the random number first
let randomNumber = Math.round(Math.random() * 100 + 1);

//need user input as value
const userInput = document.querySelector("#guessField");
// need submit button events
const submit = document.querySelector("#subt");
//need previous user's guess
const userGuess = document.querySelector(".user-guess");
//need remaining guess
const remaining = document.querySelector(".remianing-guess");
//need low or high
const lowOrHigh = document.querySelector(".lowOrHigh");
//need startover
const startOver = document.querySelector(".resultParas");
//will create a paragraph
const p = document.createElement("p");

//To show all the previous user's input
let prevGuess = [];
//count starts from 1
let numGuess = 1;

let playGame = true;

//if user is ready to play, take the value and pass
if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

//to validate if the input is between 1 and 100, else add the value into the array
function validateGuess(guess) {
    if (guess < 1) {
        alert("Please enter a number between 1 & 100!");
    } else if (guess > 100) {
        alert("Please enter a number between 1 & 100!");
    } else if (isNaN(guess)) {
        alert("Please enter a valid number!");
    } else {
        prevGuess.push(guess);
        if (numGuess >= 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

//to check if win or lose
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it Right!`);
    } else if (guess < randomNumber) {
        displayMessage(`Your number is TOO low!`);
    } else if (guess > randomNumber) {
        displayMessage(`Your number is TOO high!`);
    }
}

//to clear out the values and update the arrays, remaining values
function displayGuess(guess) {
    userInput.value = "";
    userGuess.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

//to display the messages
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

//to end the current game
//clear the value
//setAttribute as a key:value to disable
//added 'p' class & added HTML
//appendChild into 'resultParas' div
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame" style="text-decoration: underline; cursor: pointer">Start New</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

//to start a new game
//select the element - id = "newGame"
//Reset all the variables
function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", (e) => {
        randomNumber = Math.round(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        userGuess.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}
