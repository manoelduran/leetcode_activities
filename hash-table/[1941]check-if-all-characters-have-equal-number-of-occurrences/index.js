/**
 *
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const values = Array.from(map.values());

  for (let i = 1; i < values.length; i++) {
    if (values[i] !== values[0]) {
      return false;
    }
  }
  return true;
};

const s = "abacbc";
const result = areOccurrencesEqual(s);
console.log(result);
