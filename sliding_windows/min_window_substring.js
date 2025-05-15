const minWindow = function (s, t) {
  let mapT = new Map();
  let shortestSubstringLength = Infinity;
  let shortestWindow = [null, null];
  let window = new Map();
  for (let char of t) {
    mapT.set(char, mapT.get(char) ? mapT.get(char) + 1 : 1);
  }

  let l = 0;
  // we need have and need to find out if chars in mapT
  // have is the number of chars in window that are in mapT and the count is the same as in mapT
  let have = 0;
  // need is the number of unique chars in mapT
  // because we need to find out if we have all the chars in mapT

  let need = mapT.size;

  for (let r = 0; r < s.length; r++) {
    window.set(s[r], window.get(s[r]) ? window.get(s[r]) + 1 : 1);

    if (mapT.get(s[r]) && mapT.get(s[r]) === window.get(s[r])) have++;
    while (have === need) {
      if (r - l + 1 < shortestSubstringLength) {
        shortestWindow = [l, r];
        shortestSubstringLength = r - l + 1;
      }
      let leftChar = s[l];
      window.set(leftChar, window.get(leftChar) - 1);
      if (mapT.has(leftChar) && window.get(leftChar) < mapT.get(leftChar)) {
        have--;
      }
      l++;
    }
  }

  return shortestSubstringLength === Infinity
    ? ""
    : s.slice(shortestWindow[0], shortestWindow[1] + 1);
};

// let s = "ADOBECODEBANC",
//   t = "ABC";
// minWindow(s, t);

// let s = "ADOBECODEBANC",
//   t = "ABC";
// minWindow(s, t);

//  left and right, defining the window boundaries.

// High-level algorithm:

// Expand right to include more characters until the window contains all characters in t.

// Once it’s valid, try to shrink from the left to minimize the window.

// Keep track of the smallest valid window seen

// const minWindow = function (s, t) {
//   const tMap = new Map();
//   const window = new Map();
//   let shortestSubstringLength = Infinity;
//   let shortestStringIndices = [null, null];

//   for (let ch of t) {
//     tMap.set(ch, (tMap.get(ch) || 0) + 1);
//   }

//   let l = 0;
//   for (let r = 0; r < s.length; r++) {
//     // expand until valid
//     window.set(s[r], (window.get(s[r]) || 0) + 1);

//     while (isValid(window, tMap)) {
//       // shrink until invalid
//       // to find the shortest window
//       if (r - l + 1 < shortestSubstringLength) {
//         shortestSubstringLength = r - l + 1;
//         shortestStringIndices = [l, r];
//       }
//       const leftChar = s[l];
//       window.set(leftChar, window.get(leftChar) - 1);
//       l++;
//     }
//   }

//   const [start, end] = shortestStringIndices;

//   return start === null ? "" : s.slice(start, end + 1);
// };

// const isValid = function (window, tMap) {
//   for (let [char, count] of tMap.entries()) {
//     if (window.get(char) < count) {
//       return false;
//     }
//   }
//   return true;
// };
