/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const result = [];
  for (let i = 0; i < temperatures.length; i++) {
    let next = i + 1;
    while (temperatures[i] >= temperatures[next] && next < temperatures.length) {
      next++;
    }
    if (temperatures[next] - temperatures[i] > 0) {
      result.push(next - i);
    } else {
      result.push(0);
    }
  }
  return result;
};