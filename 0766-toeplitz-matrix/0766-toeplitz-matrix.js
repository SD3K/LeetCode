/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
  for (let i = matrix.length - 1; i >= 0; i--) {
    let j = i + 1;
    let k = 1;
    while (j < matrix.length && k < matrix[0].length) {
      if (matrix[j][k] !== matrix[i][0]) {
        return false;
      }
      j++;
      k++;
    }
  }
  
  for (let i = 1; i < matrix[0].length; i++) {
    let j = 1;
    let k = i + 1;
    while (j < matrix.length && k < matrix[0].length) {
      if (matrix[j][k] !== matrix[0][i]) {
        return false;
      }
      j++;
      k++;
    }
  }
  
  return true;
};