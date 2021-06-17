class SudokuSolver {

  validate(puzzleString) {
    const puzzleFormat = /(\d|\.){81}/;
    let result;
    if(puzzleString.length != 81){
      result = 'invalid length';
    } else if(puzzleString.match(puzzleFormat)){
      result = 'valid';
    } else {  
      result = 'invalid char';
    }
    return result;
  }

  checkRowPlacement(puzzleString, row, column, value) {
    //validate puzzle string
    if(this.validate(puzzleString) != 'valid'){
      return this.validate(puzzleString);
    }
    //check every placement in the row for the value
    //if it exists, invalid placement
    const RowsEnum = Object.freeze({"A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8 });
    //validate row, column, and value
    const rowFormat = /[A-I]/i;

    if(!row.toUpperCase().match(rowFormat) || !(1 >= column <= 9)){
      return 'invalid coordinate';
    }
    if(!(1 >= value <= 9)){
      return 'invalid value';
    }

    //go to start of a row and check if value exists in any placement
    const rowStart = RowsEnum[row.toUpperCase()] * 9;
    const rowEnd = rowStart + 9;
    for(let i = rowStart; i < rowEnd; i++){
      if(puzzleString[i] == value){
        return 'invalid placement';
      }
    }
    return 'valid placement';
  }

  checkColPlacement(puzzleString, row, column, value) {
    //validate puzzle string
    if(this.validate(puzzleString) != 'valid'){
      return this.validate(puzzleString);
    }

    const RowsEnum = Object.freeze({"A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8 });
    //validate row, column, and value
    const rowFormat = /[A-I]/i;

    if(!row.toUpperCase().match(rowFormat) || !(1 >= column <= 9)){
      return 'invalid coordinate';
    }
    if(!(1 >= value <= 9)){
      return 'invalid value';
    }

    //check every placement in the column if it already contains the value
    const rowStart = RowsEnum[row.toUpperCase()] * 9;
    let columnPlacement = rowStart + column - 1;

    while(columnPlacement - 9 > 0){
      columnPlacement -= 9;
    }
    
    for(let i = columnPlacement; i <= 81; i = i + 9){
      if(puzzleString[i] == value){
        return 'invalid placement';
      }
    }
    return 'valid placement';
  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

