// const maxProfit = (prices) => {
//     let buyDay= 0;
//     let sellDay = 1;
//     let maxProfit = 0;

    
//     while(sellDay < prices.length) {
//         if(prices[sellDay] < prices[buyDay]) {
//             buyDay = sellDay;
//         } else {
//             let profit = prices[sellDay] - prices[buyDay];
//             maxProfit = Math.max(profit, maxProfit);
//         }
//         sellDay++;
        
//     }

//     return maxProfit;

// }



const characterReplacement = (s, k) => {
    
    let longestSubstring = 0;
    let l, r =  0
    // ABAACDCC
    
    let substringLength = 0;

    for(let r = 0; r < s.length; r++) {
        if(s[l] === r[l]) {
            substringLength++;
        } else if(s[l] !== r[l] && k > 0) {
            k--;
            substringLength++;
        } else {
            // if we do not have k anymore
            substringLength = 0;

        }
        longestSubstring = Math.max(longestSubstring, substringLength);
    }   

    return longestSubstring;
}