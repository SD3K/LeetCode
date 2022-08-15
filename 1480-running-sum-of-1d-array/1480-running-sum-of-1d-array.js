/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let num = nums.slice(0, i + 1);
        num = num.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        result.push(num);
    }
    return result;
};