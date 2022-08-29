/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const wordsArr = s.split(' ');
  
  while (wordsArr[wordsArr.length - 1] === '') {
    wordsArr.pop();
  }
  
  return wordsArr[wordsArr.length - 1].length
};