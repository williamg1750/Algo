let p1display = document.querySelector('#p1display');
let p2display = document.querySelector('#p2display');

let isGameover = false;
let player1score = 0;
let player2score = 0;
let winningScoreSelect = document.querySelector('#playto');
let winningScore = 0;

let p1btn = document.querySelector('#p1btn');
let p2btn = document.querySelector('#p2btn');
let reset = document.querySelector('#reset');

const resetFunc = () => {
  isGameover = false;
  player1score = 0;
  player2score = 0;
  winningScore = 0;
  p1display.textContent = player1score;
  p2display.textContent = player2score;
  p1display.classList.remove('red', 'green');
  p2display.classList.remove('red', 'green');
};

winningScoreSelect.addEventListener('change', function () {
  resetFunc();
  winningScore = parseInt(this.value);
});

p1btn.addEventListener('click', () => {
  if (!isGameover) {
    player1score++;
    if (player1score === winningScore) {
      isGameover = true;
      p1display.classList.toggle('green');
      p2display.classList.toggle('red');
    }
    p1display.textContent = player1score;
  }
});

p2btn.addEventListener('click', () => {
  if (!isGameover) {
    player2score++;
    if (player2score === winningScore) {
      isGameover = true;
      p2display.classList.toggle('green');
      p1display.classList.toggle('red');
    }
    p2display.textContent = player2score;
  }
});
reset.addEventListener('click', resetFunc);
