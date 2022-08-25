/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let left = 0;
  let right = nums.length - 1;
  let curr = nums[left];
  
  while (left < right) {
    while (left < right && nums[right] == val) {
      right--;
    }
    if (nums[left] == val) {
      curr = nums[left];
      nums[left] = nums[right];
      nums[right] = curr;
    }
    left++;
  }
  while (nums[nums.length - 1] === val) {
    nums.pop();
  }
};
