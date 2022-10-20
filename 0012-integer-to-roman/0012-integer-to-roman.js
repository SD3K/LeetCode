/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let solution = '';
  
  while (num > 0) {
    if (num - 1000 >= 0) {
      solution += 'M';
      num -= 1000;
    } else if (num - 900 >= 0) {
      solution += 'CM';
      num -= 900;
    } else if (num - 500 >= 0) {
      solution += 'D';
      num -= 500;
    } else if (num - 400 >= 0) {
      solution += 'CD';
      num -= 400;
    } else if (num - 100 >= 0) {
      solution += 'C';
      num -= 100;
    } else if (num - 90 >= 0) {
      solution += 'XC';
      num -= 90;
    } else if (num - 50 >= 0) {
      solution += 'L';
      num -= 50;
    } else if (num - 40 >= 0) {
      solution += 'XL';
      num -= 40;
    } else if (num - 10 >= 0) {
      solution += 'X';
      num -= 10;
    } else if (num - 9 >= 0) {
      solution += 'IX';
      num -= 9;
    } else if (num - 5 >= 0) {
      solution += 'V';
      num -= 5;
    } else if (num - 4 >= 0) {
      solution += 'IV';
      num -= 4;
    } else {
      solution += 'I';
      num -= 1;
    }
  }
  return solution;
};