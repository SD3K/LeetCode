/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  let neg = undefined;
  let sol = [];
  
  let max = (2**31) - 1;
  let min = (-2)**31;
  
  const clamp = (num) => Math.min(Math.max(num, min), max);
  
  for (let i = 0; i < s.length; i++) {
    if (sol.length === 0 && s[i] === ' ' && neg === undefined) {
      continue;
    }
    if (neg !== undefined && (s[i] === '-' || s[i] === '+')) {
      break;
    }
    if (sol.length === 0 && s[i] === '-') {
      neg = true;
      continue;
    }
    if (sol.length === 0 && s[i] === '+') {
      neg = false;
      continue;
    }
    if (s[i] >= '0' && s[i] <= '9') {
      sol.push(s[i]);
      continue;
    }
    break;
  }
  if (sol.length === 0) {
    sol.push(0);
  }
  sol = sol.join('');
  return neg ? clamp(parseInt(sol) * (-1)) : clamp(parseInt(sol));
};