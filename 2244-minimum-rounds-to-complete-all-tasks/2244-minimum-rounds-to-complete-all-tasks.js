/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = (tasks) => {
  let counts = {};
  let rounds = 0;
  
  for (let i = 0; i < tasks.length; i++) {
    if (counts[tasks[i]] === undefined) {
      counts[tasks[i]] = 1;
    } else {
      counts[tasks[i]]++;
    }
  }
  
  for (let key in counts) {
    if (counts[key] < 2) {
      return -1;
    } else {
      rounds += Math.ceil(counts[key] / 3);
    }
  }
  return rounds;
};