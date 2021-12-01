// აქ ისაა მთავარი, რომ indexOf აბრუნებს პირველ occurence-ს იმ ქარაქთერის, რომელიც მეორდება. იქამდე რომ მოვჭრათ, გვექნება იუნიქქარაქთერიანი სტრინგი
// var lengthOfLongestSubstring = function (s) {
//   let curr = [];
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     let currIndex = curr.indexOf(s[i]);
//     if (currIndex !== -1) {
//       curr.splice(0, currIndex + 1);
//     }
//     curr.push(s[i]);
//     if (curr.length > max) max = curr.length;
//   }
//   return max;
// };

// var removeDuplicates = function (nums) {
//   let nums = new Set(nums);

//   return nums.length;
// };

// var removeDuplicates = function (nums) {
//   // Length of the updated array
//   let count = 0;
//   // Loop for all the elements in the array
//   for (let i = 0; i < nums.length; i++) {
//     // If the current element is equal to the next element, we skip
//     if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
//       console.log("skipped", nums[i]);
//       continue;
//     }
//     // We will update the array in place
//     console.log(nums[count], nums[i], "hhh", nums);
//     nums[count] = nums[i];
//     console.log(nums);
//     count++;
//   }
//   return count;
// };

// var majorityElement = function (nums) {
//   let obj = {};
//   let majNum = null;
//   for (let value of nums) {
//     obj[value] = ++obj[value] || 1;
//   }
//   for (let key in obj) {
//     if (obj[key] > nums.length / 2) majNum = key;
//   }
//   return majNum;
// };

// var moveZeroes = function (nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[j] === 0) {
//       let zero = nums.splice(j, 1);
//       nums.push(...zero);
//     } else {
//       j++;
//     }
//   }
//   return nums;
// };

// var reverseString = function (s) {
//   let arr = [...s];
//   let j = 0;
//   for (let i = arr.length - 1; i >= arr.length / 2; i--) {
//     [s[i], s[j]] = [s[j], s[i]];
//     j++;
//   }
//   console.log(s);
// };

// //  pascal's triangle
// var generate = function (numRows) {
//   if (numRows === 1) return [[1]];
//   if (numRows === 0) return [[]];
//   const arr = [[1], [1, 1]];
//   for (let i = 1; i < numRows - 1; i++) {
//     let newArr = [1];
//     for (let j = 1; j < arr[i].length; j++) {
//       newArr.push(arr[i][j] + arr[i][j - 1]);
//     }
//     newArr.push(1);
//     arr.push(newArr);
//   }
//   return arr;
// };

// var removeDuplicates = function (nums) {
//   let k = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[k] !== nums[i]) {
//       nums[k + 1] = nums[i];
//       k++;
//     }
//   }
//   console.log(nums);
//   return k + 1;
// };

// var singleNumber = function (nums) {
//   let unique = null;
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count < 2) {
//       unique = nums[i];
//     }
//   }
//   return unique;
// };
// my solution
// var singleNumber = function (nums) {
//   let hash = {};
//   nums.forEach((num) => {
//     if (hash[num]) {
//       delete hash[num];
//     } else {
//       hash[num] = 1;
//     }
//   });
//   return Object.keys(hash)[0];
// };
// someone's optimized solution

// var maxSubArray = function (nums) {
//   if (nums.length === 1 || nums.length === 0) return nums[0] || 0;
//   let maxSub = 0;
//   let currSub = 0;
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     let num = nums[j];
//     if (num < 0 && currSub + num < currSub) {
//       console.log(currSub, "upper if");
//       i = j + 1;
//       currSub = 0;
//     } else {
//       console.log("iinif", currSub);
//       currSub += num;
//       console.log("iinif", currSub, nums[i]);
//     }
//     if (maxSub < currSub) maxSub = currSub;
//   }
//   return maxSub;
// };

// var maxSubArray = function (nums) {
//   let isNegative = nums.every((num) => {
//     return num < 0;
//   });
//   if (isNegative) {
//     let maxSub = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] > maxSub) maxSub = nums[i];
//     }
//     return maxSub;
//   } else {
//     let maxSubSum = 0;
//     let currSubSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] <= 0) continue;
//       for (let j = i; j < nums.length; j++) {
//         currSubSum += nums[j];
//         if (currSubSum > maxSubSum) maxSubSum = currSubSum;
//       }
//       currSubSum = 0;
//     }
//     return maxSubSum;
//   }
// };
//  my solution

// var maxSubArray = function (nums) {
//   let max = -Infinity;
//   let currSum = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     currSum = Math.max(0, currSum);
//     currSum += nums[i];
//     max = Math.max(currSum, max);
//   }
//   return max;
// };

// console.log(maxSubArray([-2]));

// howSum
// var twoSum = function (nums, target, memo = {}) {
//   if (target in memo) return memo[target];
//   if (target === 0) return [];
//   if (target < 0) return null;
//   for (let i = 0; i < nums.length; i++) {
//     let remainder = target - nums[i];
//     let result = twoSum(nums.slice(i + 1), remainder);
//     if (result) {
//       memo[target] = [...result, nums[i]];
//       return memo[target];
//     }
//   }
// };
