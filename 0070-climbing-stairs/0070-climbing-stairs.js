/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n === 1 || n === 2) {
    return n
  }
  
  const count = [];
  count[0] = 1;
  count[1] = 2;
  
  for (let i = 2; i < n; i++) {
    count.push(count[i - 1] + count[i - 2]);
  }
  
  return count.pop();
};