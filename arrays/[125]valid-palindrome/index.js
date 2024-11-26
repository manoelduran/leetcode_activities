/**
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const s = "A man, a plan, a canal: Panama";
const result = isPalindrome(s);
console.log("result", result);

// Time complexity: O(n)
// Space complexity: O(n)
