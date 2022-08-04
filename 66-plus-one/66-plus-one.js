/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let i = digits.length - 1;
  let carryTheOne = 0;
  
  do {
    digits[i] += 1;
    carryTheOne = Math.floor(digits[i] / 10);
    digits[i] %= 10;
    i--;
  } while (i >= 0 && carryTheOne > 0);
  
  if (carryTheOne > 0) {
    digits.unshift(1);
  }
  
  return digits;
};