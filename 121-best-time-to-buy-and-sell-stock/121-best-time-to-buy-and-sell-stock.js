/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let result = 0;
  // // Brute Force
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = prices.length - 1; j > i; j--) {
  //     if (prices[j] - prices[i] > 0) {
  //       result = Math.max(result, prices[j] - prices[i]);
  //     }
  //   }
  // }
  let low = undefined;
  let high = 0;
  for (let i = 0; i < prices.length; i++) {
    if (low === undefined) {
      low = prices[i];
    }
    if (prices[i] < low) {
      low = prices[i];
      high = 0;
    }
    high = Math.max(high, prices[i]);
    if (low < high) {
      result = Math.max(result, high - low);
    }
    
  }
  return result;
};