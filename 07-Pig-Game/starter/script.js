"use strict";

//Selecting elements
//Player 0
const player0El = document.querySelector(`.player--0`);
const name0 = document.querySelector(`#name--0`);
let score0El = document.querySelector(`#score--0`);
let current0El = document.querySelector(`#current--0`);
//Player 1
const player1El = document.querySelector(`.player--1`);
const name1 = document.querySelector(`#name--1`);
let score1El = document.querySelector(`#score--1`);
let current1El = document.querySelector(`#current--1`);
//Global
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const diceEl = document.querySelector(`.dice`);
//Starting condition variables
let currentScore, activePlayer, playing, scores;

/* Two ways to select element by id instead of class
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);*/

//Starting conditions
/* score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`); */

const startCond = function () {
  //Background stats
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  //Visible text
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //Visible elements
  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--active`);
  player0El.classList.add(`player--active`);
};

startCond();

//Fuction to switch player
const switchPlayer = function () {
  //Reset displayed current score
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //Stored current score set back to zero
  currentScore = 0;
  //Switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Change background color
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

//Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    //1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //Add roll to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Hold button functionality
btnHold.addEventListener(`click`, function () {
  if (playing) {
    //Hold current score and add it to current score
    scores[activePlayer] += currentScore;
    //Display new score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      //VICTORY
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceEl.classList.add(`hidden`);
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

//New button functionality
btnNew.addEventListener(`click`, startCond);
