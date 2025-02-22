const BOARD_SIZE = 6;  // اندازه تخته بازی
const WHITE = 'white';  // رنگ سفید
const BLACK = 'black';  // رنگ مشکی

let currentPlayer = BLACK;  // شروع بازی با مهره مشکی
let board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));  // تخته بازی 6x6

const AI_PLAYER = BLACK;  // هوش مصنوعی مهره مشکی را بازی می‌کند
const HUMAN_PLAYER = WHITE;  // بازیکن انسانی مهره سفید را بازی می‌کند

// متغیرهای مرتبط با تعداد مهره‌ها و وضعیت بازی
let whiteCount = 2;
let blackCount = 2;

// پیدا کردن موقعیت‌ها برای گذاشتن مهره
function getValidMoves(player) {
  const moves = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === null) {
        // بررسی کنید که این خانه قابل حرکت باشد
        if (isValidMove(row, col, player)) {
          moves.push({ row, col });
        }
      }
    }
  }
  return moves;
}

// بررسی کردن یک حرکت معتبر
function isValidMove(row, col, player) {
  // این تابع باید بررسی کند که آیا این حرکت معتبر است
  // بر اساس قوانین Reversi
  return true; // موقتی: پیاده‌سازی واقعی باید در اینجا باشد
}

// اعمال حرکت بر روی تخته
function applyMove(row, col, player) {
  board[row][col] = player;
  updateBoard();  // بروزرسانی صفحه بازی

  // تغییر نوبت
  currentPlayer = currentPlayer === WHITE ? BLACK : WHITE;

  // بروزرسانی تعداد مهره‌ها
  updateDiscCount();
  checkGameOver();
}

// بروزرسانی تعداد مهره‌ها
function updateDiscCount() {
  whiteCount = 0;
  blackCount = 0;

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === WHITE) whiteCount++;
      if (board[row][col] === BLACK) blackCount++;
    }
  }

  document.getElementById('white-disc-count').textContent = whiteCount;
  document.getElementById('black-disc-count').textContent = blackCount;
}

// بررسی پایان بازی
function checkGameOver() {
  const validMovesWhite = getValidMoves(WHITE);
  const validMovesBlack = getValidMoves(BLACK);

  if (validMovesWhite.length === 0 && validMovesBlack.length === 0) {
    const message = whiteCount > blackCount ? 'You win!' : 'You lose';
    document.getElementById('message').textContent = message;
  }
}

// نمایش صفحه بازی
function updateBoard() {
  const boardElement = document.getElementById('canvas-container');
  boardElement.innerHTML = '';  // حذف محتوای قبلی

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (board[row][col] === WHITE) {
        const disc = document.createElement('div');
        disc.classList.add('disc', 'white');
        cell.appendChild(disc);
      } else if (board[row][col] === BLACK) {
        const disc = document.createElement('div');
        disc.classList.add('disc', 'black');
        cell.appendChild(disc);
      }

      cell.addEventListener('click', () => handleCellClick(row, col));
      boardElement.appendChild(cell);
    }
  }
}

// مدیریت کلیک روی خانه‌ها
function handleCellClick(row, col) {
  if (board[row][col] === null && isValidMove(row, col, currentPlayer)) {
    applyMove(row, col, currentPlayer);
    if (currentPlayer === AI_PLAYER) {
      aiMove();  // حرکت هوش مصنوعی
    }
  }
}

// حرکت هوش مصنوعی
function aiMove() {
  const validMoves = getValidMoves(AI_PLAYER);
  if (validMoves.length > 0) {
    const move = validMoves[0];  // انتخاب اولین حرکت معتبر
    applyMove(move.row, move.col, AI_PLAYER);
  }
}

// شروع بازی
document.addEventListener('DOMContentLoaded', () => {
  updateBoard();  // نمایش تخته بازی
  document.getElementById('message').textContent = "Your turn!";
  updateDiscCount();
});
