/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const checkRow = (row) => {
    let rowMap = new Map();
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '.') continue;
      if (rowMap.has(row[i])) return false;
      else rowMap.set(row[i], true);
    }
    return true;
  };
  
  const getSubMatrix = (matrix, startRow, startCol, length) => {
    return matrix.slice(startRow, startRow + length).map(row => row.slice(startCol, startCol + length));
  }
  
  let valid = true;
  
  // check rows and columns
  for (let i = 0; i < board.length; i++) {
    valid = checkRow(board[i]);
    if (!valid) return valid;
    for (let j = 0; j < board.length; j++) {
      let col = board.map((value) => value[j]);
      valid = checkRow(col);
      if (!valid) return valid;
    }
  }
  
  // check each 3x3 sub matrix
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      let sub = getSubMatrix(board, i, j, 3);
      valid = checkRow(sub.flat());
          if (!valid) return valid;
    }
  }
  
  return valid;
};