/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i]) - 1;

    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  let disappearedItems = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      disappearedItems.push(i + 1);
    }
  }
  return disappearedItems;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const result = findDisappearedNumbers(nums);
console.log(result);

// Time complexity: O(n)
// Space complexity: O(1)
