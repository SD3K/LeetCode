/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const stringified = x.toString();
    let match = true;
    
    for (let i = 0; i < stringified.length / 2; i++) {
        if (stringified[i] !== stringified[stringified.length - (1 + i)]) {
            match = false;
        }
    }
    return match;
};