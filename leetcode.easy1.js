// function romanToInt(romanNum) {
//   let int = null;
//   let iv = romanNum.indexOf("IV");
//   let ix = romanNum.indexOf("IX");
//   let xl = romanNum.indexOf("XL"); //40
//   let xc = romanNum.indexOf("XC"); //90
//   let cd = romanNum.indexOf("CD"); //500
//   let cm = romanNum.indexOf("CM"); //900

//   if (iv !== -1) {
//     int += 4;
//     romanNum = romanNum.slice(0, iv) + romanNum.slice(iv + 2, romanNum.length);
//     console.log(iv);
//   }
//   if (ix !== -1) {
//     int = int + 9;
//     romanNum = romanNum.slice(0, ix) + romanNum.slice(ix + 2, romanNum.length);
//   }
//   if (xl !== -1) {
//     romanNum = romanNum.slice(0, xl) + romanNum.slice(xl + 2, romanNum.length);
//     int += 40;
//   }
//   if (xc !== -1) {
//     int += 90;
//     romanNum = romanNum.slice(0, xc) + romanNum.slice(xc + 2, romanNum.length);
//     console.log(int, xc);
//   }
//   if (cd !== -1) {
//     int += 400;
//     romanNum = romanNum.slice(0, cd) + romanNum.slice(cd + 2, romanNum.length);
//   }
//   if (cm !== -1) {
//     int += 900;
//     romanNum = romanNum.slice(0, cm) + romanNum.slice(cm + 2, romanNum.length);
//     console.log(int, romanNum);
//   }

//   for (let symb of romanNum) {
//     console.log(int, "io");

//     switch (symb) {
//       case "I":
//         int++;
//         break;
//       case "V":
//         int += 5;
//         break;
//       case "X":
//         int += 10;
//         break;
//       case "V":
//         int += 5;
//         break;
//       case "L":
//         int += 50;
//         break;

//       case "C":
//         int += 100;
//         break;
//       case "D":
//         int += 500;
//         break;

//       case "M":
//         int += 1000;
//         break;
//     }
//   }
//   return int;
// }    my approach

// var romanToInt = function(s) {

//     const sym = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }

//     let result = 0;

//     for (i=0; i < s.length; i++){
//         const cur = sym[s[i]];
//         const next = sym[s[i+1]];

//         if (cur < next){
//             result += next - cur // IV -> 5 - 1 = 4
//             i++
//         } else {
//             result += cur
//         }
//     }

//     return result;
// }; googled approach

// container with most water
// var maxArea = function (height) {
//   let maxS = 0;
//   let currS = 0;
//   let i, j;
//   let last = 0;
//   for (i = 0; i <= height.length - 1; i++) {
//     if (height[i] < height[last]) {
//       continue;
//     }
//     last = i;
//     for (j = height.length - 1; j > i; j--) {
//       let width = j - i;
//       if (height[i] > height[j]) {
//         currS = height[j] * width;
//       } else {
//         currS = height[i] * width;
//       }
//       if (currS > maxS) {
//         maxS = currS;
//       }
//     }
//   }
//   return maxS;
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

//  Longest Common Prefix

// var longestCommonPrefix = function (strs) {
//   let commonPrefix = "";
//   let minLength = strs[0].length;
//   for (let i = 0; i < strs.length; i++) {
//     if (strs[i].length < minLength) minLength = strs[i].length;
//   }
//   for (let i = 0; i < minLength; i++) {
//     let includes = true;
//     for (let str of strs) {
//       if (str[i] !== strs[0][i]) {
//         includes = false;
//       }
//     }
//     if (includes) commonPrefix += strs[0][i];
//     else break;
//   }
//   return commonPrefix;
// };

// console.log(longestCommonPrefix(["aa", "ab"]));
//  my solution

// function prefix(words) {
//   // check border cases size 1 array and empty first word)
//   if (!words[0] || words.length == 1) return words[0] || "";
//   let i = 0;
//   // while all words have the same character at position i, increment i
//   while (words[0][i] && words.every((w) => w[i] === words[0][i])) i++;
//   // prefix is the substring from the beginning to the last successfully checked i
//   return words[0].substr(0, i);
// }
// console.log(prefix(["ane", "ana"]));
// // googled soluton

// )(){}

// let isValid = (s) => {
//   while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
//     if (s.includes("()")) {
//       s = s.replace("()", "");
//     }
//     if (s.includes("{}")) {
//       s = s.replace("{}", "");
//     }
//     if (s.includes("[]")) {
//       s = s.replace("[]", "");
//     }
//   }
//   return s.length === 0 ? true : false;
// };

// console.log(isValid("[({(())}[()])]"));

// var reverse = function (x) {
//   let reversed = Math.abs(x).toString().split("").reverse();
//   while (reversed[0] == 0) {
//     reversed = reversed.slice(1);
//   }
//   reversed = reversed.join("");
//   reversed = Number(reversed);
//   if (x < 0) reversed *= -1;
//   if (reversed < Math.pow(2, 31) * -1 || reversed > Math.pow(2, 31) - 1) {
//     return 0;
//   }
//   return reversed;
// };

// console.log(reverse(-123));
