/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    console.log("print", prices[i]);
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    const profit = prices[i] - minPrice;
    if (profit > maxPrice) {
      maxPrice = profit;
    }
  }
  return maxPrice;
};

const prices = [7, 1, 5, 3, 6, 4];
const ok = maxProfit(prices);
console.log(ok);

// Time Complexity: O(n)
// Space Complexity: O(1)
