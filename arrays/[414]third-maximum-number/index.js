/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let maxValue = -Infinity;
  let secondMaxValue = -Infinity;
  let thirdMaxValue = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] === maxValue ||
      nums[i] === secondMaxValue ||
      nums[i] === thirdMaxValue
    ) {
      continue;
    }
    if (nums[i] > maxValue) {
      thirdMaxValue = secondMaxValue;
      secondMaxValue = maxValue;
      maxValue = nums[i];
    }
    if (nums[i] > secondMaxValue && nums[i] < maxValue) {
      thirdMaxValue = secondMaxValue;
      secondMaxValue = nums[i];
    }
    if (nums[i] > thirdMaxValue && nums[i] < secondMaxValue) {
      thirdMaxValue = nums[i];
    }
  }

  return thirdMaxValue === -Infinity ? maxValue : thirdMaxValue;
};

const nums = [2, 2, 3, 1];

const result = thirdMax(nums);
console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
