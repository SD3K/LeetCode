/**
 * @param {number[]} changed
 * @return {number[]}
 */
function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }
  
  changed.sort((a, b) => a - b);
  const solution = [];
  
  const map = new Map();
  
  for (let i = 0; i < changed.length; i++) {
    if (map.get(changed[i])) {
      map.set(changed[i], map.get(changed[i]) + 1);
    } else {
      map.set(changed[i], 1);
    }
  }
  
  if (map.has(0)) {
    if (map.get(0) % 2 !== 0) {
      return [];
    }
  }
  
  for (let key of map) {
    if (map.has(key[0] * 2) && map.get(key[0]) && map.get(key[0] * 2)) {
      while (map.get(key[0]) > 0 && map.get(key[0] * 2) > 0) {
        solution.push(key[0]);
        map.set(key[0], (map.get(key[0]) - 1));
        map.set(key[0] * 2, (map.get(key[0] * 2) - 1));
      }
    } else if (map.has(key[0] / 2) /*&& map.get(key[0]) === map.get(key[0] / 2)*/) {
      continue;
    } else {
      return [];
    }
  }
  
  return solution.length === changed.length / 2 ? solution : [];
};