/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words) {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let hash = {
    count: 0
  };

  for (let i = 0; i < alpha.length; i++) {
    if (hash[alpha[i]] === undefined) {
      hash[alpha[i]] = morse[i];
    }
  }
  
  for (let i = 0; i < words.length; i++) {
    let morseWord = '';
    for (let j = 0; j < words[i].length; j++) {
      morseWord += hash[words[i][j]];
    }
    if (hash[morseWord] === undefined) {
      hash[morseWord] = true;
      hash.count++
    }
  }
  
  return hash.count;
};