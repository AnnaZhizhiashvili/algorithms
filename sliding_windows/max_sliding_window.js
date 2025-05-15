const maxSlidingWindow = (nums, k) => {
  let res = [];
  let currWindow = [];
  let l = 0;
  for (let r = 0; r < nums.length || r < k; r++) {
    currWindow.push(nums[r]);
    if (currWindow.length === k) {
      res.push(Math.max(...currWindow));
      currWindow = [];
      let count = k;
      while (count) {
        r--;
      }
    }
  }
};
