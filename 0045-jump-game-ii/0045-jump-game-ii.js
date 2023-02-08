/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let count = 0;
  let jumpLength = 0;
  let currIdx = 0;
  
  if (nums.length === 1) {
    return count;
  }
  
  for (let i = 0; i < nums.length; i++) {
    jumpLength = Math.max(jumpLength, i + nums[i]);
    
    if (i === currIdx) {
      currIdx = jumpLength;
      count++;
      
      if (jumpLength >= nums.length - 1) {
        return count;
      }
    }
  }
  
  return count;
};