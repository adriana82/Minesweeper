

 const generatePlayerBoard= (numberOfRows,numberOfColumns)=>{
    console.log("Player Board");
    let board=[];
    //calculate rows
    for(boardRows=0; boardRows< numberOfRows ; boardRows++){
        console.log('rows:'+boardRows);
        let row=[];
    //calculate columns
        for (boardColumns= 0 ; boardColumns < numberOfColumns ; boardColumns++){
           console.log('column:'+boardColumns);
           row.push(" ");
         }//end inner for
          board.push(row);

      }//end outer for
          return board;
};
  generatePlayerBoard(2,3);

  const generateBombBoard=(numberOfRows,numberOfColumns,numberOfBombs)=>{
    console.log("Bomb Board")
    let board=[];
    //calculate rows
        for(boardRows=0; boardRows< numberOfRows ; boardRows++){
            console.log('rows:'+boardRows);
            let row=[];
            for (boardColumns= 0 ; boardColumns < numberOfColumns ; boardColumns++){
              console.log('column:'+boardColumns);
              row.push(" ");
        }//end inner for
          board.push(row);

      }//end outer for

         let numberOfBombsPlaced = 0;
         while(numberOfBombsPlaced < numberOfBombs){
             let randomRowIndex = Math.floor(Math.random() * numberOfRows);
             let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
             board[randomRowIndex][randomColumnIndex]="B";
             numberOfBombsPlaced ++;
             // bombs can be added on top of other bomb after learning control line lesson

         }
        return board;
  };

 generateBombBoard(2,3,2);

const printBoard=(board)=>{
    console.log(board.map(row=> row.join (' | ')).join('\n'));
}

 let playerBoard = generatePlayerBoard(3,4);
 let bombBoard  = generateBombBoard(3,4,5);
 console.log("Player Board");
 printBoard(playerBoard);
 console.log("Bomb Board");
 printBoard(bombBoard);
