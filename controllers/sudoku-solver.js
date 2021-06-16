class SudokuSolver {

  validate(puzzleString) {
    const puzzleFormat = /(\d|\.){81}/;
    let result;
    if(puzzleString.length != 81){
      result = 'invalid_length';
      return result;
    }
    if(puzzleString.match(puzzleFormat)){
      result = 'valid';
    } else {  
      result = 'invalid_char';
    }
    return result;
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

