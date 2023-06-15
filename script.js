// ビンゴゲームの設定
const rows = 5; // ボードの行数
const cols = 5; // ボードの列数
const numbers = []; // 使用される数字

// ゲームボードを生成する関数
function generateBoard() {
  const board = document.getElementById('board');
  board.innerHTML = ''; // ボードをリセット

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;

      const randomNumber = generateRandomNumber();
      cell.textContent = randomNumber;

      numbers.push(randomNumber);

      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

// ランダムな数字を生成する関数
function generateRandomNumber() {
  // 重複しないランダムな数字を生成するロジックを実装
}

// ゲームを開始する関数
function startGame() {
  generateBoard();
  // ゲームのロジックを実装
}
