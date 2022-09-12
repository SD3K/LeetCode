/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
function bagOfTokensScore(tokens, power) {
  let score = 0;
  tokens.sort((a, b) => a - b);
  
  while(tokens.length) {
    if (power >= tokens[0]) {
      power -= tokens[0];
      tokens.shift();
      score++;
    } else if (score > 0 && tokens.length > 1) {
      power += tokens[tokens.length - 1];
      tokens.pop();
      score--;
    } else {
      tokens.pop();
    }
  }
  
  return score;
};