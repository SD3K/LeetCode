/**
 * @param {number} n
 * @return {boolean}
 */

const getNext = function(n) {
    let totalSum = 0;
    while (n > 0) {
        let d = parseInt(n % 10);
        n = parseInt(n / 10);
        totalSum += parseInt(d * d);
    }
    return totalSum;
};

const isHappy = function(n) {
    let seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = getNext(n);
    }
    return n === 1;
};