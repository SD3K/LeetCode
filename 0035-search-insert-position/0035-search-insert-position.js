/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let start = 0;
  let mid = parseInt(nums.length / 2);
  let end = nums.length - 1;
  
  if (target <= nums[start]) {
    return 0;
  } else if (target > nums[end]) {
    return nums.length;
  } else if (target === nums[end]) {
    return end;
  }
  
  while (start + 1 < end) {
    if (target > nums[mid]) {
      start = mid;
      mid = parseInt((start + end) / 2);
    } else if (target < nums[mid]) {
      end = mid;
      mid = parseInt((start + end) / 2);
    } else {
      return mid;
    }
  }
  return nums[end] > target ? end : end + 1;
};