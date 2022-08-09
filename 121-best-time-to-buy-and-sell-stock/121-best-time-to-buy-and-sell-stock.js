/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let result = 0;
  let low = prices[0];
  let high = 0;
  for (let i = 0; i < prices.length; i++) {
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