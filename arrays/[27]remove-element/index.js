/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

var removeElement = (nums, val) => {
  let newIndex = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[newIndex] = nums[i];
      newIndex++;
    }
  }
  return newIndex;
};
const ok = removeElement(nums, val);
console.log(ok, nums.slice(0, ok));
