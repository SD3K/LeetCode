/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  const vowels = new Set();
  vowels.add('a'); vowels.add('e'); vowels.add('i'); vowels.add('o'); vowels.add('u');
  vowels.add('A'); vowels.add('E'); vowels.add('I'); vowels.add('O'); vowels.add('U');
  const sArr = s.split('');

  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (!vowels.has(sArr[left])) {
      left++;
    }

    if (!vowels.has(sArr[right])) {
      right--;
    }

    if (vowels.has(sArr[left]) && vowels.has(sArr[right])) {
      let curr = sArr[left];
      sArr[left] = sArr[right];
      sArr[right] = curr;
      left++;
      right--;
    }
  }

  return sArr.join('');
};