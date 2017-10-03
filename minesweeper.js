"use strict";

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  // console.log("Player Board");
  var board = [];
  //calculate rows
  for (boardRows = 0; boardRows < numberOfRows; boardRows++) {
    // console.log('rows:'+boardRows);
    var row = [];
    //calculate columns
    for (boardColumns = 0; boardColumns < numberOfColumns; boardColumns++) {
      //  console.log('column:'+boardColumns);
      row.push(" ");
    } //end inner for
    board.push(row);
  } //end outer for
  return board;
};
// generatePlayerBoard(2,3);

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  // console.log("Bomb Board")
  var board = [];
  //calculate rows
  for (boardRows = 0; boardRows < numberOfRows; boardRows++) {
    // console.log('rows:'+boardRows);
    var row = [];
    for (boardColumns = 0; boardColumns < numberOfColumns; boardColumns++) {
      // console.log('column:'+boardColumns);
      row.push(" ");
    } //end inner for
    board.push(row);
  } //end outer for

  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== "B") {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
};

// generateBombBoard(2,3,2);

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
  var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  var numberOfRows = bombBoard.length;
  var numberOfColums = bombBoard[0].length;
  var numberOfBombs = 0;
  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset[0];
    var neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] == "B") {
        numberOfBombs++;
      }
    };
  });
  return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
  if (playerBoard[rowIndex][columnIndex] !== " ") {
    return "This tile has already been flipped!";
  } else if (bombBoard[rowIndex][columnIndex] === "B") {
    playerBoard[rowIndex][columnIndex] = "B";
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log("Player Board");
printBoard(playerBoard);
console.log("Bomb Board");
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 1, 0);
console.log("Updated Player Board:");
printBoard(playerBoard);