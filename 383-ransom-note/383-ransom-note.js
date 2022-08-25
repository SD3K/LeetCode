/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  let ransomMap = {};
  let magazineMap = {};
  
  function mapString(string, map) {
    for (let i = 0; i < string.length; i++) {
      map[string[i]] === undefined ? map[string[i]] = 1 : map[string[i]]++;
    }
    return map;
  }
  
  ransomMap = mapString(ransomNote, ransomMap);
  magazineMap = mapString(magazine, magazineMap);
  
  for (let key in ransomMap) {
    if (magazineMap[key] === undefined || ransomMap[key] > magazineMap[key]) {
      return false;
    }
  }
  return true;
};