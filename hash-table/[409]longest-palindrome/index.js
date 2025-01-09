/**
 *
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s.length;

  const map = new Map();

  // Count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let length = 0;
  let hasOdd = false;

  for (const [char, count] of map) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      hasOdd = true;
    }
  }

  if (hasOdd) {
    length += 1;
  }

  return length;
};

const s = "abccccdd";
const result = longestPalindrome(s);
console.log(result);
