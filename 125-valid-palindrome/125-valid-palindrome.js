/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const spaceless = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for(let i = 0; i < (spaceless.length + 1) / 2; i++) {
        if(spaceless[i] !== spaceless[spaceless.length - 1 - i]) {
            return false;
        }
    }
    return true;
};