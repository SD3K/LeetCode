/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  while (nums.indexOf(val) >= 0) {
    nums.splice(nums.indexOf(val), 1);
  }
};