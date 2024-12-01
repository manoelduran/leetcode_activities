/**
 *
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[nonZeroIndex];
      nums[nonZeroIndex] = nums[i];
      nums[i] = temp;
      nonZeroIndex++;
    }
  }
};

const nums = [0, 1, 0, 3, 12];

const result = moveZeroes(nums);
console.log(result); // [1, 3, 12, 0, 0]

// Time Complexity: O(n)
// Space Complexity: O(1)
