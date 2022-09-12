/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {
    const map = {};
    let max = 0;
    let maxCount = 0;
    
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        const current = s[right];
        
        map[current] = map[current] + 1 || 1;
        maxCount = Math.max(maxCount, map[current]);
        
        while (right - left + 1 - maxCount > k) {
            map[s[left]]--;
            left++;
        }
        
        max = Math.max(max, right - left + 1);
        right++;
    }
    
    return max;
};