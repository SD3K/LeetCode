/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
  let count = 0;
  let visited = {};
  
  const traverse = function(start) {
    visited[start] = true;
    for (let end = 0; end < isConnected.length; end++) {
      if (isConnected[start][end] === 1 && visited[end] === undefined) {
        traverse(end);
      }
    }
  }
  
  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i] === undefined) {
      count++;
      traverse(i);
    }
  }
  return count;
};