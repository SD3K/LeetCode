/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++
      }
  };
  
  return nums.sort((a, b) => map[a] - map[b] || b - a);
};