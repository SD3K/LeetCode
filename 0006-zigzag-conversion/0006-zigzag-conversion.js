/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;

  let ans = "";
  let cycleLen = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += cycleLen) {
      ans += s[j];
      if (i != 0 && i != numRows - 1 && j + cycleLen - 2 * i < s.length) {
        ans += s[j + cycleLen - 2 * i];
      }
    }
  }
  return ans;
}
