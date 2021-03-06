










/*
class Game{
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
     this._board= new Board(numberOfRows,numberOfColumns,numberOfBombs);
     console.log("Game board created.");
   }

   playMove(rowIndex,columnIndex){
      this._board.flipTile(rowIndex,columnIndex);
      if(this._board._playerBoard[rowIndex][columnIndex] == 'B') {
        console.log("Game over!");
        this._board.print();
      }else if(this._board._playerBoard[rowIndex][columnIndex] ===this._board.hasSafeTiles()){
        console.log("CONGRATULATIONS! You won!");
        this._board.print();
      }else{
        console.log("Current board:");
        this._board.print();
        this._board.printBombBoard();
      }
   }
}//end Game

class Board{
    constructor(numberOfRows,numberOfColumns,numberOfBombs){
       this._numberOfBombs = numberOfBombs;
       this._numberOfTiles = numberOfRows*numberOfColumns;
       this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
       this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns,numberOfBombs);
    }
    get playerboard(){
      return this._playerBoard = playerBoard;
    }

    flipTile( rowIndex, columnIndex){
      if(this._playerBoard[rowIndex][columnIndex]!== " "){
          return "This tile has already been flipped!"
      } else if (this._bombBoard[rowIndex][columnIndex]==="B" ){
      this._playerBoard[rowIndex][columnIndex] = "B";
      } else {
         this._playerBoard [rowIndex][columnIndex]= this.getNumberOfNeighborBombs(rowIndex,columnIndex)
      }
      this.numberOfTiles--;
      //flipTile (playerBoard,bombBoard,1,0);
    }

    getNumberOfNeighborBombs (rowIndex,columnIndex){
      const neighborOffsets=[
         [-1,-1],[-1,0],[-1,1],
         [0,-1],[0,1],
         [1,-1],[1,0],[1,1]
      ];
      const numberOfRows= this._bombBoard.length;
      const numberOfColumns =this._bombBoard[0].length;
      let numberOfBombs=0;
      neighborOffsets.forEach(offset=> {
        const neighborRowIndex= rowIndex+ offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex>=0 && neighborColumnIndex<numberOfColumns){
          if(this._bombBoard[neighborRowIndex][neighborColumnIndex] == "B") {
            numberOfBombs++;
          }
        }
      });//end foreach
      return this._numberOfBombs;
    }//end getNumbersOfNeighborBombs

    hasSafeTiles(){
         this.numberOfTiles!== this.numberOfBombs;
    }

    print(){
        console.log(this._playerBoard.map(row=> row.join (' | ')).join('\n'));
    }
    printBombBoard(){
        console.log(this._bombBoard.map(row=> row.join (' | ')).join('\n'));
    }

    static generatePlayerBoard(numberOfRows,numberOfColumns){
      let board=[];
      //calculate rows
      for(let boardRows = 0; boardRows< numberOfRows ; boardRows++){
        let row=[];
        //calculate columns
        for (let boardColumns= 0 ; boardColumns < numberOfColumns ; boardColumns++){
          row.push(" ");
        }//end inner for
        board.push(row);
      } //end outer for
      return board;
            //  let playerBoard = generatePlayerBoard(3,4);
            //  console.log("Player Board");
            //  printBoard(playerBoard);
    }//end generatePlayerBoard


    static  generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs){
      //console.log("Creating bomb board # bombs:"+numberOfBombs);
      let board=[];
      //calculate rows
      for(let boardRows=0; boardRows< numberOfRows ; boardRows++){
        let row=[];
        for (let boardColumns= 0 ; boardColumns < numberOfColumns ; boardColumns++){
          row.push(" ");
        }//end inner for
        board.push(row);
      }//end outer for
      let numberOfBombsPlaced = 0;
      while(numberOfBombsPlaced < numberOfBombs){
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if(board[randomRowIndex][randomColumnIndex]!=="B"){
          board[randomRowIndex][randomColumnIndex] = 'B';
          numberOfBombsPlaced++;
        }
      }//end while;
      return board;
      }//end generateBombBoard

}
//end of class


 const g = new Game(3, 3, 3);
 g.playMove(0,1);
 g.playMove(1,1);
 g.playMove(2,1);
 g.playMove(0,0);
 g.playMove(1,0);
 g.playMove(2,0);

 
*/
