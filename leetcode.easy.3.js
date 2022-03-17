const arr = [7,1,5,3,6,4];
const maxProfit = function(prices) {
    let minPrice = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        let sellPrice = prices[i];
        let profit = sellPrice - minPrice;
        if(minPrice > sellPrice) minPrice = sellPrice;
        max = Math.max(max, profit);
    }
    return max;
};
