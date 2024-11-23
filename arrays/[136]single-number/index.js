// /**
//  * @param {number[]} nums
//  * @return  {number}
//  */
// var singleNumber = (nums) => {
//   let uniqueNumbers = [];
//   let repeatedNumbers = [];
//   for (let i = 0; i < nums.length; i++) {
//     let isRepeated = false;
//     // verify if the number is repeated
//     for (let j = 0; j < nums.length; j++) {
//       console.log("das", j);
//       if (i !== j && nums[i] === nums[j]) {
//         isRepeated = true;
//         break;
//       }
//     }
//     if (!isRepeated) {
//       uniqueNumbers.push(nums[i]);
//     }
//     repeatedNumbers.push(nums[i]);
//   }
//   return uniqueNumbers;
// };

// const nums = [2, 4, 1, 2];

// const result = singleNumber(nums);
// console.log(result);

// Time Complexity: O(n^2)
// Space Complexity: O(n)

/*/ Using XOR operator /*/

/**
 * @param {number[]} nums
 * @return  {number}
 */
var singleNumber = (nums) => {
  let result = 0;
  // for in iterates over the indexes
  // for of iterates over the values
  for (let num of nums) {
    // XOR operator returns 1 if the bits are different and 0 if they are the same
    result ^= num;
  }
  return result;
};

const nums = [4, 4, 2];

const ok = singleNumber(nums);
console.log(ok);
