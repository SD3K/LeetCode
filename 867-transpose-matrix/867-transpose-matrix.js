/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = function(matrix) {
    let transposed = [];
    let width = matrix.length;
    let height = matrix[0].length;
    for(let i = 0; i < height; i++) {
        let row = [];
        for(let j = 0; j < width; j++) {
            row.push(matrix[j][i]);
        }
        transposed.push(row);
    }
    return transposed;
};