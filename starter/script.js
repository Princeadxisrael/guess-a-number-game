'use strict';

//Game app that compares numbers to random numbers like a dice

const displayMessage = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const displaySecretNumber = document.querySelector('.number');
const guessfunc = document.querySelector('.guess');
const body = document.querySelector('body');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
displaySecretNumber.textContent = secretNumber;

const init = function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore.textContent = score;
  displayMessage.textContent = 'Start guessing...';
  guessfunc.value = '';
  displaySecretNumber.textContent = '?';
  body.style.backgroundColor = '#222';
  displaySecretNumber.style.width = '15rem';
};

let score = 5;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessfunc.value);

  //no input
  if (!guess) {
    displayMessage.textContent = 'No number!⚠';

    //When Player wins
  } else if (guess === secretNumber) {
    displayMessage.textContent = '✅ correct number!';

    body.style.backgroundColor = '#60b347';

    displaySecretNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1 && guess !== secretNumber) {
      displayMessage.textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      displayScore.textContent = score;
    } else {
      displayMessage.textContent = 'you have lost the game';
      displayScore.textContent = 0;
    }
  }
});

//     //guess too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       displayMessage.textContent = 'Too high';
//       score--;
//       displayScore.textContent = score;
//     } else {
//       displayMessage.textContent = 'you have lost the game';
//       displayScore.textContent = 0;
//     }

//     //guess too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       displayMessage.textContent = 'Too low';
//       score--;
//       displayScore.textContent = score;
//     } else {
//       displayMessage.textContent = 'you have lost the game';
//       displayScore.textContent = 0;
//     }
//   }
// });

//Challenge

document.querySelector('.again').addEventListener('click', init);
