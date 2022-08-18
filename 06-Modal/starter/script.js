"use strict";
//First we select all elements that we'll need from the other files
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);

//Function to open the modal (instead of repeating the code)
const openModal = function () {
  console.log(`Button Clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
//Event o trigger the modal opening
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener(`click`, openModal);

//Function to close the modal (instead of repeating the code)
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
//Events to trigger modal closure
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

//Modal closure on pressing Esc
document.addEventListener(`keydown`, function (e) {
  console.log(e);
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
