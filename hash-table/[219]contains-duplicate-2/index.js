/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const j = map.get(nums[i]);
      if (Math.abs(i - j) <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }

  return false;
};

const nums = [1, 0, 1, 1];
const k = 3;
const result = containsNearbyDuplicate(nums, k);
console.log(result);

// Time Complexity: O(n)
// Space Complexity: O(n)
