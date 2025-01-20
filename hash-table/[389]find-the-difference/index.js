/**
 *
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();
  if (t.length === 1) return t;
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) === undefined ? 1 : map.get(s[i]) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i]) || map.get(t[i]) === 0) {
      return t[i];
    }
    map.set(t[i], map.get(t[i]) - 1);
  }
};

const s = "abcd";
const t = "abcde";
const result = findTheDifference(s, t);
console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
