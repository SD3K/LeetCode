/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = (nums) => {
  let squareNums = [];
  for (let i = 0; i < nums.length; i++) {
    squareNums.push(nums[i] * nums[i]);
  }
  
  squareNums.sort((a, b) => a - b);
  return squareNums;
};