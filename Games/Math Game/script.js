let timer;
let timeLeft = 10;
let gameOver = false;

function startGame() {
  document.getElementById('game-container').classList.remove('hidden');
  document.getElementById('start-button').classList.add('hidden');
  gameOver = false;
  updateProgressBar(100);
  generateProblem();
  startTimer();
}

function generateProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = ['+', '-', 'x'][Math.floor(Math.random() * 3)];
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
  }
  document.getElementById('problem').textContent = `${num1} ${operator} ${num2} = ?`;
  const options = document.querySelectorAll('#options button');
  const correctIndex = Math.floor(Math.random() * 3);
  options.forEach((option, index) => {
    if (index === correctIndex) {
      option.textContent = result;
      option.dataset.correct = true;
    } else {
      option.textContent = Math.floor(Math.random() * 100) + 1;
      option.dataset.correct = false;
    }
  });
}

function startTimer() {
  timeLeft = 10;
  updateTimerDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    updateProgressBar((timeLeft / 10) * 100); 
    if (timeLeft === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
}

function checkAnswer(button) {
  if (gameOver) return;
  clearInterval(timer);
  const correct = button.dataset.correct === 'true';
  if (correct) {
    alert('Correct!');
    startGame();
  } else {
    endGame();
  }
}

function endGame() {
  gameOver = true;
  clearInterval(timer);
  document.getElementById('popup').classList.remove('hidden');
}

function restartGame() {
  gameOver = false;
  document.getElementById('popup').classList.add('hidden');
  startGame();
}

function goToHome() {
  window.location.href = "https://meme-pages.github.io/Games/Games.html"; 
}

function updateProgressBar(progress) {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${progress}%`;
}
