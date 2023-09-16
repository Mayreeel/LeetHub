/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            if(prices[right] - prices[left]>max_profit){
                max_profit = prices[right] - prices[left]
            }
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};