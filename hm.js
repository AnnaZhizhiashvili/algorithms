// sum
// const yo = function (n) {
//   const sum = (n * (n + 1)) / 2;
//   return sum;
// };

// const freqCounter = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   const arr1Obj = {};
//   for (let value of arr1) {
//     arr1Obj[value] = ++arr1Obj[value] || 1;
//   }
//   const arr2Obj = {};
//   for (let value of arr2) {
//     arr2Obj[value] = ++arr2Obj[value] || 1;
//   }
//   for (let key in arr1Obj) {
//     if (!(key ** 2 in arr2Obj)) {
//       return false;
//     }
//     if (arr1Obj[key ** 2] !== arr2Obj[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// const anagram = (str1, str2) => {
//   str1 = str1.toLowerCase().replace(/\s/g, "");
//   str2 = str2.toLowerCase().replace(/\s/g, "");

//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const obj1 = {};
//   for (let char of str1) {
//     obj1[char] = ++obj1[char] || 1;
//   }
//   const obj2 = {};
//   for (let char of str2) {
//     obj2[char] = ++obj2[char] || 1;
//   }

//   for (let key in obj1) {
//     if (!(key in obj2)) {
//       return false;
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

//  [ -6, -2, -1, 0, 2, 4, 6]

// const multiplePointer = (arr) => {
//   let first = 0;
//   let last = arr.length - 1;
//   for (const value of arr) {
//     if (arr[first] + arr[last] < 0) {
//       first++;
//     } else if (arr[first] + arr[last] > 0) {
//       last--;
//     } else {
//       return [arr[first], arr[last]];
//     }
//   }
// };

//  [1, 2, 4, 2, 6, 1], 2

// sliding window pattern
// const maxSubArray = (arr, num) => {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (num > arr.length) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i <= arr.length; i++) {
//     tempSum = tempSum + arr[i] - arr[i - num];
//     if (tempSum > maxSum) {
//       maxSum = tempSum;
//     }
//   }
//   return maxSum;
// };

// flatten in my way

// function someRecursive(arr) {
//   let flattenedArr = [];
//   function mainHelper(arr) {
//     arr.forEach((i, index) => {
//       if (Array.isArray(i)) {
//         index = arr.indexOf(i);
//         arr = arr.filter((el) => el !== i);
//         arr.splice(index, 0, ...i);
//       }
//     });
//     let arrays = arr.filter((el) => {
//       return Array.isArray(el);
//     });
//     if (arrays.length === 0) {
//       flattenedArr = [...arr];
//       return;
//     }
//     mainHelper(arr);
//   }
//   mainHelper(arr);
//   return flattenedArr;
// }

// function flatten(oldArr) {
//   var newArr = [];
//   for (var i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]));
//     } else {
//       newArr.push(oldArr[i]);
//     }
//   }
//   return newArr;
// }

// function nestedEvenSum(obj) {
//   let array = Object.values(obj);
//   let sum = 0;
//   function helper(array) {
//     array.forEach((el, index) => {
//       if (typeof el === "object") {
//         index = array.indexOf(el);
//         console.log("****");
//         console.log(el, index, "index", array);
//         console.log("****");
//         array.splice(index, 1);
//         console.log(array, "after splice");
//         array = [...array, ...Object.values(el)];
//         console.log(array, "after spread");
//       }
//     });
//     let hm = array.filter((el) => {
//       if (typeof el === "object") {
//         return true;
//       }
//     });
//     if (hm.length === 0) {
//       array.forEach((el) => {
//         if (typeof el === "number") {
//           if (el % 2 === 0) {
//             sum += el;
//           }
//         }
//       });
//       return sum;
//     }
//     return helper(array);
//   }
//   helper(array);
//   return sum;
// }

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// console.log(nestedEvenSum(obj2)); // 6
// nestedEvenSum(obj2); // 10

// function capitalizeWords(arr) {
//   let newArray = [];
//   function helper(arr) {
//     if (arr.length === 0) return;
//     newArray.push(arr[0].toUpperCase());
//     return helper(arr.slice(1));
//   }
//   helper(arr);
//   return newArray;
// }
// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length - 1)[0].toUpperCase());
//   console.log(res);
//   return res;
// }

// let words = ["i", "am", "learning", "recursion"];
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// [1, 3, 5, 10, 20]  5

// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     let middle = Math.floor(end/2);
//     while(start < end){
//         if(target > nums[middle]) {
//             start = middle;

//         } else if(target < nums[middle]) {
//             end = middle;
//         } else {
//             return middle;
//         }
//         middle = Math.floor(end/2)
//     };
//     return -1;

// };

// var twoSum = function (nums, target) {
//   let sum = -Infinity;
//   let outerMemo = {};
//   let internalMemo = {};
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (i === j) continue;
//       if (i !== j) {
//         sum = nums[i] + nums[j];
//         if (sum === target) return [i, j];
//       }
//       internalMemo[j] = 1;
//     }
//     outerMemo[i] = 1;
//   }
// };
