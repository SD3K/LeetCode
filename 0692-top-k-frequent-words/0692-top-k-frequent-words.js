/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  const map = {};
  console.log(words);
  words.sort();
  console.log(words);
  
  for (let i = 0; i < words.length; i++) {
    map[words[i]] === undefined ? map[words[i]] = 1 : map[words[i]] += 1;
  }
  console.log(map);
  
  const dedupe = Object.keys(map);
  console.log(dedupe);
  
  dedupe.sort((a, b) => {
    return map[b] - map[a];
  });
  console.log(dedupe);
  
  return dedupe.slice(0, k);
};