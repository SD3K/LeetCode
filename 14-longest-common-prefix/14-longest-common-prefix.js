/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let result = '';
    for(let i = 0; i < strs[0].length; i++) {
        let match = true;
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                match = false;
                return result;
            }
        }
        if (match) {
            result += strs[0][i];
        }
    }
    return result;
};