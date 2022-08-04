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
    } else {
      for (let i = index; i < candidates.length; i++) {
        let innerSum = sum + candidates[i];
        
        if (innerSum <= target) {
          innerSol.push(candidates[i]);
          
          getSums(i, innerSum);
          
          innerSol.pop();
        }
      }
    }
  }
  
  getSums(0, 0);
  
  return solution;
};