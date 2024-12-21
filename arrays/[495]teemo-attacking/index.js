/**
 *
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let totalPoisonedTime = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    if (i === 0) {
      totalPoisonedTime += duration;
      continue;
    }
    const gap = timeSeries[i] - timeSeries[i - 1];

    if (gap >= duration) {
      totalPoisonedTime += duration;
    }
    if (gap < duration) {
      totalPoisonedTime += gap;
    }
  }
  return totalPoisonedTime;
};

const timeSeries = [1, 4];
const duration = 2;
const result = findPoisonedDuration(timeSeries, duration);
console.log(result);

// Time Complexity: O(n)
// Space Complexity: O(1)
