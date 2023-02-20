/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aNum = BigInt('0b' + a);
  let bNum = BigInt('0b' + b);
  let sum = aNum + bNum;
  return sum.toString(2);
};