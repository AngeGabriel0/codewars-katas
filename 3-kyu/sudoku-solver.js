function sudoku(puzzle) {

    //Function to check if a number is valid in a cell
  function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + (i % 3);
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
    }
    return true;
  }

    //Function to solve the puzzle
  function solve(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == 0) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(board, i, j, k)) {
              board[i][j] = k;
              if (solve(board)) {
                return true;
              } else {
                board[i][j] = 0;
              }
            }
          }
          return false; //backtrack -> reset the cell to 0
        }
      }
    }
    return true; //solved
  }

  solve(puzzle);
  return puzzle;
}

//Function to print the sudoku grid
function printSudoku(grid) { 
    for(let i = 0; i < grid.length; i++) {
      console.log(grid[i].join(' '));
    }
  }

//Cede below is for an example puzzle
let puzzle1 = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0]
];

let puzzle2 = [
  [1, 0, 0, 4, 8, 9, 0, 0, 6],
  [7, 3, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 1, 2, 9, 5],
  [0, 0, 7, 1, 2, 0, 6, 0, 0],
  [5, 0, 0, 7, 0, 3, 0, 0, 8],
  [0, 0, 6, 0, 9, 5, 7, 0, 0],
  [9, 1, 4, 6, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 3, 7],
  [8, 0, 0, 5, 1, 2, 0, 0, 4]
];

let puzzle3 = [
  [0, 2, 0, 6, 0, 8, 0, 0, 0],
  [5, 8, 0, 0, 0, 9, 7, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0],
  [3, 7, 0, 0, 0, 0, 5, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 8, 0, 0, 0, 0, 1, 3],
  [0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 9, 8, 0, 0, 0, 3, 6],
  [0, 0, 0, 3, 0, 6, 0, 9, 0]
];


printSudoku(sudoku(puzzle1));
console.log('\n');
printSudoku(sudoku(puzzle2));
console.log('\n');
printSudoku(sudoku(puzzle3));
