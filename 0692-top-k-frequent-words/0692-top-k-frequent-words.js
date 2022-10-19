/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  const map = {};
  words.sort();
  
  for (let i = 0; i < words.length; i++) {
    map[words[i]] === undefined ? map[words[i]] = 1 : map[words[i]] += 1;
  }
  
  const dedupe = Object.keys(map);
  
  dedupe.sort((a, b) => {
    return map[b] - map[a];
  });
  
  return dedupe.slice(0, k);
};