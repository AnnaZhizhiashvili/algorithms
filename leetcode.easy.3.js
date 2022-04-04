// const arr = [7,1,5,3,6,4];
// const maxProfit = function(prices) {
//     let minPrice = prices[0];
//     let max = 0;
//     for (let i = 1; i < prices.length; i++) {
//         let sellPrice = prices[i];
//         let profit = sellPrice - minPrice;
//         if(minPrice > sellPrice) minPrice = sellPrice;
//         max = Math.max(max, profit);
//     }
//     return max;
// };

var strStr = function(haystack, needle) {
   if(needle === "" && haystack !== needle ) return 0;
   return haystack.indexOf(needle)
};

// console.log(strStr("ississippi", "issip"));


var isHappy = function(n) {
    let sum;
    let number = n;
    let map = {};
    while(sum !== 1 && !map[number]){
        map[number] = true;
        let digits = number.toString().split('');
        sum = digits.reduce((prev, curr )=> prev + Number(curr * curr), 0);
        if(sum === 1) return true;
        number = sum;
    }
    return false; 

};

// console.log(isHappy(19))

var countBitsMine = function (n) {
    let arr = [];
    let bitsArr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(i);
    }
  
    arr.forEach((el) => {
      let remainders = 0;
      while (el !== 0) {
        if (el % 2 === 1) remainders++;
        el = Math.floor(el / 2);
      }
      bitsArr.push(remainders);
    });
    return bitsArr;
  };

var countBitsImproved = function(n) {
  let offset = 1;
  let arr = [0, 1];
  for(let i = 2; i <=n; i++ ) {
    if(offset*2 === i) offset = i;
    let value = 1 + arr[i - offset];
    arr.push(value)
  }
  return arr;
};


// var hammingWeight = function (n) {
//   let binarySum;
//   while(n) {
//     let remainder = n % 2;
//     if(remainder === 1) binarySum++;
//     n = Math.floor(n/2);
//   }
//   return binarySum;
// };

var isPalindromeMine = function(x) {
  let forwards = x.toString().split('');
  let backwards = [];
  for(let i = forwards.length - 1; i >= 0; i--) {
    backwards.push(forwards[i])
  };
  if(backwards.join('') === forwards.join('')) return true;
  return false;
};

// recursion version

var isPalindromeRecursive = (input) => {
  if(input.length <= 1) return true;
  if(input[input.length - 1] === input[0]) isPalindrome(input.slice(1, input.length - 1))
  return false;
}
// console.log(isPalindrome('121'));


var plusOne = function(digits) {
  for(let i = digits.length - 1; i>=0; i--) {
    if(digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  // in case input is [9,9] it's never gonna go into if and will never return, array will [0, 0], so we need to add 1 manually;
  digits.unshift(1);
  return digits;
};

