const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Plaese add valid number!!');
  } else if (guess < 0) {
    alert('Enter number more than 1');
  } else if (guess > 100) {
    alert('Enter number between 1 to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over,random number was ${guess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage('Your Guess is Right!!!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too Low!!');
  } else if (guess > randomNumber) {
    displayMessage('Number is too High!!');
  }
}
function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  playGame = false;
  startOver.appendChild(p);
  newGame();
}
function endGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
