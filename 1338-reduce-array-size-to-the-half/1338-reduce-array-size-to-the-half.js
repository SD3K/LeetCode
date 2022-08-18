/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  if (!arr.length) {
    return 0;
  }
  const map = {};
  let sum = 0;
  const half = Math.ceil(arr.length / 2);
  
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  
  const nums = Object.keys(map);
  nums.sort((a, b) => map[b] - map[a]);
  
  for (let i = 0; i < nums.length; i++) {
    sum += map[nums[i]];
    if (sum >= half) {
      return i + 1;
    }
  }
};