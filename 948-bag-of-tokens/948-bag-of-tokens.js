/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
function bagOfTokensScore(tokens, power) {
  tokens.sort((a, b) => a - b);
  let score = 0;
  let left = 0;
  let right = tokens.length - 1;
  let max = 0;
  
  while(left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      left++;
      score++;
    } else if (score >= 1) {
      power += tokens[right];
      right--;
      score--;
    } else {
      right--;
    }
    max = Math.max(max, score);
  }
  
  return max;
};