/**
 *
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map();
  let alphabetIndex = 0;
  for (const char of key) {
    if (char !== " " && !map.has(char)) {
      map.set(char, String.fromCharCode(97 + alphabetIndex));
      alphabetIndex++;
    }
    if (alphabetIndex === 26) break;
  }
  return message
    .split("")
    .map((char) => map.get(char) || char)
    .join("");
};

const key = "the quick brown fox jumps over the lazy dog";
const message = "vkbs bs t suepuv";
const result = decodeMessage(key, message);
console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
