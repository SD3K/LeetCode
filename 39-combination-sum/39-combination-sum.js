/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const solution = [];
  const innerSol = [];
  
  const getSums = function(index, sum) {
    if (sum === target) {
      solution.push([...innerSol]);
    } 
    
    for (let i = index; i < candidates.length; i++) {

      if (sum + candidates[i] <= target) {
        innerSol.push(candidates[i]);

        getSums(i, sum + candidates[i]);

        innerSol.pop();
      }
    }
  }
  
  getSums(0, 0);
  
  return solution;
};