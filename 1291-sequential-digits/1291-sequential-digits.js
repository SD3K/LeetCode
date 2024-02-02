/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = (low, high) => {
  const sequence = "123456789";
  const result = [];

  for (let i = 0; i < sequence.length; i++) {
    for (let j = i + 1; j <= sequence.length; j++) {
      const current = parseInt(sequence.substring(i, j));
      if (current <= high && current >= low) {
        result.push(current);
      }
    }
  }

  result.sort((a, b) => a - b);
  return result;
};