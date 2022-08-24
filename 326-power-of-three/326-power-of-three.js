/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n === 1) return true;
  while(n > 3) {
    n /= 3;
  }
  return n === 3 ? true : false;
};