/**
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const map1 = new Map();
  const map2 = new Map();

  for (let word of words1) {
    map1.set(word, (map1.get(word) || 0) + 1);
  }
  for (let word of words2) {
    map2.set(word, (map2.get(word) || 0) + 1);
  }

  let count = 0;
  for (let [key, value] of map1.entries()) {
    if (value === 1 && map2.get(key) === 1) {
      count++;
    }
  }

  return count;
};

const words1 = ["leetcode", "is", "amazing", "as", "is"];
const words2 = ["amazing", "leetcode", "is"];
const result = countWords(words1, words2);
console.log(result);
