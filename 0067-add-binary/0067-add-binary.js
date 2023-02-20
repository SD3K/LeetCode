/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aNum = `0b${a}`;
  let bNum = `0b${b}`;
  let sum = BigInt(aNum) + BigInt(bNum);
  return sum.toString(2);
};