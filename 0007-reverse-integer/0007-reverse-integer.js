/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let neg = x < 0 ? true : false;
  let s = neg ? (x * -1).toString() : x.toString();
  let r = neg ? '-' : '';
  for (let i = s.length - 1; i >= 0; i--) {
    r += s[i];
  }
  if (parseInt(r) > 2 ** 31 - 1 || parseInt(r) < (-2) ** 31) {
    return 0;
  }
  return parseInt(r);
};