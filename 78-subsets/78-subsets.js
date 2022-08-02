/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const solution = [];
  
  const subset = [];
  function dfs(i) {
    if (i >= nums.length) {
      solution.push([...subset]);
      return;
    }
  
    subset.push(nums[i]);
    dfs(i + 1);
    
    subset.pop();
    dfs(i + 1);
  }
  dfs(0);
  
  return solution;
};