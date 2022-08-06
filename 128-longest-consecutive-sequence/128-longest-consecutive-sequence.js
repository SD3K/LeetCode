/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let length = nums.length;
  if (!length) {
    return length;
  }
  
  let max = 0;

  const set = new Set(nums);
  
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    
    if (set.has(currNum - 1)) {
      continue;
    }
    let currMax = 0;
    while (set.has(currNum + currMax)) {
      currMax++;
    }
    
    max = Math.max(max, currMax); 
  }

  return max;
};