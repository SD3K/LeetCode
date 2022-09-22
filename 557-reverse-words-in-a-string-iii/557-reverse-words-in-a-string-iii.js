/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const sArr = s.split(' ');
  for (let i = 0; i < sArr.length; i++) {
    const word = sArr[i];
    let reversed = '';
    for (let j = word.length - 1; j >= 0; j--) {
      reversed += word[j];
    }
    sArr[i] = reversed;
  }
  
  return sArr.join(' ');
};