/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  let solution = 0;
  let odds = 1;
  while (x >= 0) {
    x -= odds;
    odds += 2;
    solution++;
  }
  return solution - 1;
};