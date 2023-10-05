let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 0) {
    alert(`Please enter a number more then 0`);
  } else if (guess > 1000) {
    alert(`Please enter a number less then 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Guess higher number`);
  } else if (guess > randomNumber) {
    displayMessage(`Guess lower number`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value=""
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h3 id="newGame">Start new game</h3>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
   randomNumber= parseInt(Math.random() * 100 + 1);
   prevGuess=[]
   numGuess=1
   guessSlot.innerHTML=''
   remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
   playGame= true
  })
}
