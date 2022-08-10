/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const result = [];
  const n = temperatures.length;
  
  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i];
    let nextHigh = i + 1;
    
    while (currentTemp >= temperatures[nextHigh] && nextHigh < n) {
      nextHigh++;
    }
    
    if (temperatures[nextHigh] - currentTemp > 0) {
      result.push(nextHigh - i);
    } else {
      result.push(0);
    }
  }
  
  return result;
};