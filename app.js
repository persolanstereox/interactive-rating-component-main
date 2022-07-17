'use strict';

const submit = document.querySelector('.submit');
const ratings = document.querySelectorAll('.ratings');
const textRating = document.querySelector('.textRating');
const thankYouState = document.querySelector('.thank_you-state');
const ratingState = document.querySelector('.ratingState');

function giveRating(rating) {
  textRating.textContent = `You have selected ${rating} out of 5`;
}

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', () => {
    giveRating(i + 1);
  });
}

function submitRating() {
  thankYouState.classList.remove('hidden');
  ratingState.classList.remove('active');
  ratingState.classList.add('hidden');
}
submit.addEventListener('click', submitRating);
