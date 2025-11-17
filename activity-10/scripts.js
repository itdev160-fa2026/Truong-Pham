// ===============================================
// Activity 10 - Tic-Tac-Toe with localStorage
// ===============================================

console.log("=== Activity 10: Tic-Tac-Toe ===");

// -----------------------------------------------
// Game State
// -----------------------------------------------
const gameState = {
  board: Array(9).fill(""),
  currentPlayer: "X",
  gameOver: false,
};

// -----------------------------------------------
// Statistics State
// -----------------------------------------------
const statsState = {
  totalGames: 0,
  xWins: 0,
  oWins: 0,
  draws: 0,
};

// -----------------------------------------------
// Local Storage Keys
// -----------------------------------------------
const GAME_KEY = "tictactoe-game-state";
const STATS_KEY = "tictactoe-statistics";

// -----------------------------------------------
// UI Elements
// -----------------------------------------------
const cells = document.querySelectorAll(".cell");
const statusMessage = document.getElementById("statusMessage");

const totalGamesEl = document.getElementById("totalGames");
const xWinsEl = document.getElementById("xWins");
const oWinsEl = document.getElementById("oWins");
const drawsEl = document.getElementById("draws");

document.getElementById("newGameBtn").addEventListener("click", newGame);
document.getElementById("resetStatsBtn").addEventListener("click", resetStatistics);

// Winning combos
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

// ===============================================
// INITIALIZATION
// ===============================================

loadStatistics();
loadGame();
updateBoardUI();

// Attach event listeners to cells
cells.forEach((cell) => {
  cell.addEventListener("click", () => handleCellClick(cell));
});

// ===============================================
// GAME LOGIC
// ===============================================

function handleCellClick(cell) {
  const index = cell.dataset.index;

  if (gameState.board[index] !== "" || gameState.gameOver) return;

  gameState.board[index] = gameState.currentPlayer;
  cell.textContent = gameState.currentPlayer;
  cell.classList.add(gameState.currentPlayer.toLowerCase());

  if (checkWinner(gameState.currentPlayer)) {
    endGame(`${gameState.currentPlayer} wins!`);

    updateStatistics(gameState.currentPlayer);
    saveStatistics();
    saveGame();
    return;
  }

  if (gameState.board.every((c) => c !== "")) {
    endGame("It's a draw!");
    updateStatistics("draw");
    saveStatistics();
    saveGame();
    return;
  }

  switchPlayer();
  saveGame();
}

function switchPlayer() {
  gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
  statusMessage.textContent = `Player ${gameState.currentPlayer}'s turn`;
}

function checkWinner(player) {
  return WINNING_COMBINATIONS.some((combo) => {
    const [a, b, c] = combo;
    if (
      gameState.board[a] === player &&
      gameState.board[b] === player &&
      gameState.board[c] === player
    ) {
      highlightWinningCells(combo);
      return true;
    }
    return false;
  });
}

function highlightWinningCells(combo) {
  combo.forEach((i) => cells[i].classList.add("win"));
}

function endGame(message) {
  gameState.gameOver = true;
  statusMessage.textContent = message;
}

// ===============================================
// NEW GAME
// ===============================================

function newGame() {
  gameState.board = Array(9).fill("");
  gameState.currentPlayer = "X";
  gameState.gameOver = false;

  statusMessage.textContent = "Player X's turn";

  // Reset UI
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o", "win");
  });

  saveGame();
  console.log("New game started:", gameState);
}

// ===============================================
// STATISTICS
// ===============================================

function updateStatistics(result) {
  statsState.totalGames++;

  if (result === "X") statsState.xWins++;
  else if (result === "O") statsState.oWins++;
  else statsState.draws++;

  renderStatistics();
}

function renderStatistics() {
  totalGamesEl.textContent = statsState.totalGames;
  xWinsEl.textContent = statsState.xWins;
  oWinsEl.textContent = statsState.oWins;
  drawsEl.textContent = statsState.draws;
}

function resetStatistics() {
  statsState.totalGames = 0;
  statsState.xWins = 0;
  statsState.oWins = 0;
  statsState.draws = 0;

  renderStatistics();
  localStorage.removeItem(STATS_KEY);

  console.log("Statistics reset.");
}

// ===============================================
// LOCAL STORAGE
// ===============================================

function saveGame() {
  localStorage.setItem(GAME_KEY, JSON.stringify(gameState));
}

function loadGame() {
  const data = localStorage.getItem(GAME_KEY);
  if (!data) return;

  const savedState = JSON.parse(data);
  gameState.board = savedState.board;
  gameState.currentPlayer = savedState.currentPlayer;
  gameState.gameOver = savedState.gameOver;

  statusMessage.textContent = gameState.gameOver
    ? "Game ended (refresh to start new game)"
    : `Player ${gameState.currentPlayer}'s turn`;

  console.log("Loaded saved game:", gameState);
}

function saveStatistics() {
  localStorage.setItem(STATS_KEY, JSON.stringify(statsState));
}

function loadStatistics() {
  const data = localStorage.getItem(STATS_KEY);
  if (!data) {
    renderStatistics();
    return;
  }

  const savedStats = JSON.parse(data);
  statsState.totalGames = savedStats.totalGames;
  statsState.xWins = savedStats.xWins;
  statsState.oWins = savedStats.oWins;
  statsState.draws = savedStats.draws;

  renderStatistics();
  console.log("Loaded statistics:", statsState);
}

// ===============================================
// UPDATE UI FROM SAVED GAME
// ===============================================

function updateBoardUI() {
  gameState.board.forEach((value, index) => {
    if (value !== "") {
      cells[index].textContent = value;
      cells[index].classList.add(value.toLowerCase());
    }
  });
}
