/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let counts = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(counts[nums[i]] === undefined) {
            counts[nums[i]] = 1;
        } else {
            counts[nums[i]]++;
        }
    }
    
    let sortedFreq = [];
    
    for(let num in counts) {
        sortedFreq.push([num, counts[num]]);
    }
    
    sortedFreq.sort((a, b) => b[1] - a[1]);
    
    let topFreq = [];
    
    for(let i = 0; i < k; i++) {
        topFreq.push(sortedFreq[i][0]);
    }
    
    return topFreq;
};