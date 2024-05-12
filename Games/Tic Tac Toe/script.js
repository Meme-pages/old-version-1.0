function toggleMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.style.display === "flex") {
        navbarLinks.style.display = "none";
    } else {
        navbarLinks.style.display = "flex";
    }
}

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let winner = null;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const popup = document.getElementById('popup');
const winnerText = document.getElementById('winner');
const indicator = document.getElementById('turn');

cells.forEach(cell => cell.addEventListener('click', handleClick));

function handleClick(index) {
    if (board[index] === '' && !winner) {
        board[index] = currentPlayer;
        render();
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    render();
}

function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];
            winnerText.innerText = `${winner === 'X' ? 'Player 1 (X)' : 'Player 2 (O)'} wins!`;
            popup.style.display = 'flex';
            break;
        }
    }
    if (!winner && !board.includes('')) {
        winnerText.innerText = `It's a draw!`;
        popup.style.display = 'flex';
    }
}

function restart() {
    board = ['', '', '', '', '', '', '', '', ''];
    winner = null;
    popup.style.display = 'none';
    render();
}

function goToHomePage() {
    window.location.href = 'index.html';
}

function render() {
    board.forEach((value, index) => {
        cells[index].innerText = value;
    });
    indicator.innerText = `Turn: ${currentPlayer}`;
}
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
