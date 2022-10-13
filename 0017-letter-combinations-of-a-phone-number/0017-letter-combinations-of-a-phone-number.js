/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const t9 = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  let res = [];
  let length = digits.length;
  
  if (!length) {
    return res;
  }
  
  function buildWords(index = 0, word = '') {
    if(index === length) {
      res.push(word);
    } else {
      let letters = t9[digits[index]];
      for (let i = 0; i < letters.length; i++) {
        buildWords(index + 1, word + letters[i]);
      }
    }
  }

  buildWords();
  return res;
};