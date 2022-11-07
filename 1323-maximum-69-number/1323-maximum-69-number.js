/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  let copy = num;
  if (parseInt(copy / 1000) === 6) {
    return num + 3000;
  }
  copy = copy % 1000;
  if (parseInt(copy / 100) === 6) {
    return num + 300;
  }
  copy = copy % 100;
  if (parseInt(copy / 10) === 6) {
    return num + 30;
  }
  copy = copy % 10;
  if (copy === 6) {
    return num + 3;
  }
  return num;
};