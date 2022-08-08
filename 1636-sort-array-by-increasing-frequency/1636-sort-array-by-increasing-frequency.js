/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  let map = {};
   for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = (map[nums[i]] || 0) + 1;
   };
   return nums.sort((a,b) => map[a] - map[b] || b - a);
};