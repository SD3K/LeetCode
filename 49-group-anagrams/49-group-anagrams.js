/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {};
    
    for(let str in strs) {
        let count = new Array(26).fill(0);
        
        for(let char in strs[str]) {
            count[strs[str][char].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        
        if (res[count.toString()] === undefined) {
            res[count.toString()] = [strs[str]];
        } else {
            res[count.toString()].push(strs[str]);
        }
    }
    
    return Object.values(res);
};