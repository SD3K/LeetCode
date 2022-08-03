/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let solution = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let target = 0 - nums[i];
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                if (nums[left] + nums[right] === target) {
                    let miniSol = [];
                    miniSol.push(nums[i]);
                    miniSol.push(nums[left]);
                    miniSol.push(nums[right]);
                    solution.push(miniSol);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (nums[left] + nums[right] > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return solution;
};