// var containsDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) return true;
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 1]));

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const obj1 = {};
  const obj2 = {};
  for (let char of s) {
    obj1[char] = ++obj1[char] || 1;
  }
  for (let char of t) {
    obj2[char] = ++obj2[char] || 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
    if (!(key in obj2)) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));

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
