/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
  const nums = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    nums.push(nums[i - 1] + nums[i - 2]);
  }
  
  return nums[n];
};