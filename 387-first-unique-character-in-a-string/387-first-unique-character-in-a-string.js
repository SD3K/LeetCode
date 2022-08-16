/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      continue;
    }
    if (s.lastIndexOf(s[i]) === i) {
      return i;
    }
    map.set(s[i])
  }
  return -1;
};