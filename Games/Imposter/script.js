// JavaScript code for the Imposter Color Game

// Define variables
const options = document.querySelectorAll('.option');
const numberSpans = document.querySelectorAll('.number');
const resultPopup = document.getElementById('result');
const resultText = document.querySelector('.result-text');
const restartButton = document.getElementById('restart-btn');
const homeButton = document.getElementById('home-btn');

// Define colors
const colors = ['#ff0000', '#00ff00', '#0000ff'];

// Randomly select the imposter color
const imposterIndex = Math.floor(Math.random() * colors.length);
const imposterColor = colors[imposterIndex];

// Generate random numbers for non-imposter options
let optionNumbers = [];
for (let i = 0; i < colors.length; i++) {
    if (i === imposterIndex) continue;
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 50) + 1; // Generate random number between 1 and 50
    } while (randomNumber % 7 === 0); // Ensure it's not a multiple of 7
    optionNumbers.push(randomNumber);
}

// Generate random number for imposter option
let imposterNumber;
do {
    imposterNumber = Math.floor(Math.random() * 50) + 1; // Generate random number between 1 and 50
} while (imposterNumber % 7 !== 0); // Ensure it's a multiple of 7

// Randomly select a position for the imposter option
const imposterOptionIndex = Math.floor(Math.random() * 3); // Randomly select from 0 to 2
optionNumbers.splice(imposterOptionIndex, 0, imposterNumber);

// Set colors and numbers for options
options.forEach((option, index) => {
    option.style.backgroundColor = colors[index];
    numberSpans[index].textContent = optionNumbers[index];
    option.addEventListener('click', () => checkAnswer(optionNumbers[index]));
});

// Function to check the answer
function checkAnswer(number) {
    if (number === imposterNumber) {
        showResult('You Win!');
    } else {
        showResult('You Lost!');
    }
}

// Function to display the result
function showResult(message) {
    resultText.textContent = message;
    resultPopup.classList.remove('hidden');
}

// Restart button functionality
restartButton.addEventListener('click', () => {
    resultPopup.classList.add('hidden');
    location.reload(); // Reload the page to start a new game
});

// Home button functionality
homeButton.addEventListener('click', () => {
    // Redirect to home page or any desired action
});
