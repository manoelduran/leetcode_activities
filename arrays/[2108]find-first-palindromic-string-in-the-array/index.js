/**
 *
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isPalindrome = true;
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
      if (word[left] !== word[right]) {
        isPalindrome = false;
        break;
      }
      left++;
      right--;
    }

    if (isPalindrome) {
      return word;
    }
  }
  return "";
};

const words = ["abc", "car", "ada", "racecar", "cool"];

const result = firstPalindrome(words);
console.log(result);

// Time Complexity is O(n * m)  so in worst case it will be O(n^2)
// Space Complexity is O(1)
