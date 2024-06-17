# Projects related to DOM 

## project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

# project 1- (color changer)

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```


# Project 2 Solution (BMI Calculator)


```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

# Project 3 (Digital Clock)

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
 // console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();
}, 1000);    // {for 1sec = 1000 intervals}
```

# Project 4 (Guess Numbers)
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playgame) {
  submit.addEventListner('click', function (e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  }else if (guess < 1 ){
    alert('Please enter a number more than 1');
  }else if (guess > 100){
    alert('Please enter a number less than 100');
  }else{
    preGuess.push(guess);
    if (numGuess === 11){
      displayGuess(guess);
      dispalyMessage(`Game Over. random number was ${random}`);
      endGame();
    }else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
if (guess === randomNumber){
displayMessage(`you guessed it right`);
endGame();
} else if (guess < randomNumber) {
  displayMessage (`Number is Too low`);
} else if (guess > randomNumber){
  displayMessage (`Number is Too high`);
 }
}

function displayGuess(guess){
 user.input.value = '';
 guessSlot.innerHTML += `${guess},  `;
 numGuess++;
 remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
 lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
 userInput.value = '';
 userInput.setAttribute('disabled', '');
 p.classList.add('button');
 p.innerHTML = `<h2 id="newGame"> Start a new Game </h2>`;
 startOver.appendChild(p);
 playGme = false;
 newGame();
}

function newGame (){
document.querySelector('#newGame');
newGameButton.addEventListener('click', function (e){
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

```














