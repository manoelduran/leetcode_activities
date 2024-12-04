/**
 *
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
    }
    j++;
  }

  return i;
};

const g = [1, 2, 3];
const s = [1, 1];

const result = findContentChildren(g, s);
console.log(result);

// Time complexity: O(nlogn)
// Space complexity: O(1)
