/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const getCounts = function(str) {
        let counts = {};
        for(let i = 0; i < str.length; i++) {
            if(counts[str[i]] === undefined) {
                counts[str[i]] = 1;
            } else {
                counts[str[i]]++;
            }
        }
        return counts;
    }
    const sCounts = getCounts(s);
    const tCounts = getCounts(t);
    
    if(Object.keys(sCounts).length !== Object.keys(tCounts).length) {
        return false;
    }
    
    for(let key in sCounts) {
        if(sCounts[key] !== tCounts[key]) {
            return false;
        }
    }
    return true;
};