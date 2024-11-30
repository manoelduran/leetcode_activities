/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};
  const limit = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
    if (map[nums[i]] > limit) {
      return nums[i];
    }
  }
};

const nums = [2, 2, 1, 1, 1, 2, 2];

const result = majorityElement(nums);
console.log(result);

// Time Complexity: O(n)
// Space Complexity: O(n)
