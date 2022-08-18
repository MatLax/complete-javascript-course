//	DOM Manipulation -> Javascript interracting with a webpage
//	DOM = Document object model

'use strict';
/*
//	Selecting a class of object in the associated html file, for an id we would use # instead of .
//	console.log(document.querySelector(`.message`));
//	To select only the text content of the class
console.log(document.querySelector(`.message`).textContent);

//	Changing the text content
document.querySelector(`.message`).textContent = `Correct Number! 😁`;

//	Just checking in console to compare to previous log
//	console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

//	Can select and change the value in a field
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

//	We want to define the secret number first so it doesn't get affected by the event
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//	Event listener: An event is something that happens in the page (like clicking a button), the listener allows us to reacts to it

//	We want to listen to the event "clicking the Check! button" and react to it by executing a function
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  //	No input
  if (!guess) {
    displayMessage(`No number! 🙄`);
    //	Guessed right
  } else if (guess === secretNumber) {
    displayMessage(`Congratulations! 😁`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    //Adjust highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
      //	DOM manipulation of the CSS style
      document.querySelector(`body`).style.backgroundColor = `#60b348`;
      document.querySelector(`.number`).style.width = `30rem`;
    }
  } else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber ? `That's too much! 😮` : `That's not enough! 😫`
    );
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    displayMessage(`You lost the game 🤣`);
    document.querySelector(`.score`).textContent = 0;
  }
});
// Implementing Again button logic
document.querySelector(`.again`).addEventListener(`click`, function () {
  //Reset secret number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Reset CSS
  //Visible text
  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`.score`).textContent = score;
  displayMessage(`Start guessing...`);
  document.querySelector('.guess').value = ``;
  //Visual elements
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
