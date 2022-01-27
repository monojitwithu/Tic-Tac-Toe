class TicTacToe {
  constructor() {
    this.playCells = Array(3)
      .fill()
      .map(() => new Array(3).fill(0));
    this.playerX = true;
    this.playerO = false;
    this.playerXName = "x";
    this.playerOName = "y";
    this.count = 0;
  }
}
const ticTacToe = new TicTacToe();

const cellClickHandler = (row, column, index) => {
  if (ticTacToe.playCells[row][column] !== 0) return;
  const playCell = document.getElementsByClassName("play-cells")[index];
  const updatedClassName = ticTacToe.playerX ? "x-cell" : "o-cell";
  playCell.classList.add(updatedClassName);
  playCell.innerText = ticTacToe.playerX ? "X" : "O";
  ticTacToe.playCells[row][column] = ticTacToe.playerX ? "X" : "O";
  ticTacToe.playerX = !ticTacToe.playerX; // this is where we are switching the Player//
  ticTacToe.count += 1;
  if (ticTacToe.count > 5) checkresult();
  updateTurnDisplay();
  /* console.log(ticTacToe.playCells[row][column])
    console.log("selected div : ",document.getElementsByClassName("play-cells")[index]) */
};
const checkresult = () => {
  // pending
};

const updateTurnDisplay = () => {
  const playerONameInput = document.getElementsByClassName("player-O")[0].value;
  const playerXNameInput = document.getElementsByClassName("player-X")[0].value;
  ticTacToe.playerXName = playerXNameInput;
  ticTacToe.playerOName = playerONameInput;
  const turnDisplay = document.getElementsByClassName("turn-display")[0];
  turnDisplay.innerText = `${
    ticTacToe.playerX ? ticTacToe.playerXName : ticTacToe.playerOName
  } Its your Turn `;
};
const refreshClickHandler = () => {
  location.reload();
};
