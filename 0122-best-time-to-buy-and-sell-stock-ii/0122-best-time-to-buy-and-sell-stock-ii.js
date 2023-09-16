/**
 * @param {number[]} prices
 * @return {number}
 */
function calProfit(prices, left, right, current_profit) {
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
                current_profit += prices[right] - prices[left];
                left = right;
        } else {
            left = right;
        }
    right++;
    }
    return current_profit;
}

var maxProfit = function(prices) {
    let left = 0; // Buy
    let right = 0; // sell
    let max_profit = 0;
    let current_profit = 0;

    for(let i = 0; i<prices.length-1; i++){
        left = 0 + i;
        right = 1 + i;
        current_profit = calProfit(prices, left, right, current_profit)
        if(current_profit > max_profit) {
            max_profit = current_profit
        }
        current_profit = 0
    }

    return max_profit;
};