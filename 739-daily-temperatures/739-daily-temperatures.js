/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = [];
  
  for (let i = n - 1; i >= 0; i--) {
    while (temperatures[stack[stack.length - 1]] <= temperatures[i] && stack.length > 0) {
      stack.pop();
    }

    if (stack.length === 0) {
      stack.push(i);
      continue;
    }
    
    if (temperatures[stack[stack.length - 1]] > temperatures[i]) {
      result[i] = stack[stack.length - 1] - i;
      stack.push(i);
    }
  }
  return result;
}