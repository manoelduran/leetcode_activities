/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
      max = max > current ? max : current;
    } else {
      current = 0;
    }
  }
  return max;
};

// Time complexity: O(n)
// Memory complexity: O(1)

const nums = [1, 1, 0, 0, 1, 1];
const ok = findMaxConsecutiveOnes(nums);
console.log("ok", ok);
