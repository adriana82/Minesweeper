'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    console.log("Player Board");
    var board = [];
    //calculate rows
    for (boardRows = 0; boardRows < numberOfRows; boardRows++) {
        console.log('rows:' + boardRows);
        var row = [];
        //calculate columns
        for (boardColumns = 0; boardColumns < numberOfColumns; boardColumns++) {
            console.log('column:' + boardColumns);
            row.push(" ");
        } //end inner for
        board.push(row);
    } //end outer for
    return board;
};
generatePlayerBoard(2, 3);

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    console.log("Bomb Board");
    var board = [];
    //calculate rows
    for (boardRows = 0; boardRows < numberOfRows; boardRows++) {
        console.log('rows:' + boardRows);
        var row = [];
        for (boardColumns = 0; boardColumns < numberOfColumns; boardColumns++) {
            console.log('column:' + boardColumns);
            row.push(" ");
        } //end inner for
        board.push(row);
    } //end outer for

    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = "B";
        numberOfBombsPlaced++;
        // bombs can be added on top of other bomb after learning control line lesson
    }
    return board;
};

generateBombBoard(2, 3, 2);

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