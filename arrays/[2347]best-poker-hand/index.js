/**
 *
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  let isFlush = true;
  for (let i = 1; i < suits.length; i++) {
    if (suits[i] !== suits[0]) {
      isFlush = false;
      break;
    }
  }
  if (isFlush) {
    return "Flush";
  }

  let hand = {};
  for (let i = 0; i < ranks.length; i++) {
    console.log("hand[ranks[i]]", hand[ranks[i]]);
    if (hand[ranks[i]] !== undefined) {
      hand[ranks[i]]++;
    }
    if (hand[ranks[i]] === undefined) {
      hand[ranks[i]] = 1;
    }
  }

  let maxCount = 0;

  for (let key in hand) {
    console.log("key", key);
    if (hand[key] > maxCount) {
      maxCount = hand[key];
    }
  }
  if (maxCount >= 3) {
    return "Three of a Kind";
  }
  if (maxCount === 2) {
    return "Pair";
  }
  return "High Card";
};

const ranks = [4, 4, 2, 4, 4];
const suits = ["d", "a", "a", "b", "c"];

const result = bestHand(ranks, suits);
console.log(result);
// Time complexity: O(n)
// Space complexity: O(n)
