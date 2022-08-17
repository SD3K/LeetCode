/**
 * @param {string[]} words
 * @return {number}
 */

const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const alpha = 'abcdefghijklmnopqrstuvwxyz';
let hash = {};
for (let i = 0; i < alpha.length; i++) {
  if (hash[alpha[i]] === undefined) {
    hash[alpha[i]] = morse[i];
  }
}

function uniqueMorseRepresentations(words) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    let morseWord = '';
    for (let j = 0; j < words[i].length; j++) {
      morseWord += hash[words[i][j]];
    }
    map.set(morseWord);
  }
  
  return map.size;
};