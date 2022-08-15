/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let counter = 0;
  const height = grid.length;
  const width = grid[0].length;
  
  const traverse = function(y, x) {
    if (y < height &&
        x < width &&
        y >= 0 &&
        x >= 0 &&
        grid[y][x] === '1') {
      grid[y][x] = '0';
      traverse(y - 1, x);
      traverse(y, x + 1);
      traverse(y + 1, x);
      traverse(y, x - 1);
    }
  }
  
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1') {
        counter += 1;
        traverse(i, j);
      }
    }
  }

  return counter;
};