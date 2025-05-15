const nonAdjacentSum = (nums, i = 0, memo = {}) => {
    if(i in memo) return nums[i];
    if (i >= nums.length) return 0;

    const includeFirst = nums[i] + nonAdjacentSum(nums, i + 2, memo);
    const excludeFirst = nonAdjacentSum(nums, i + 1, memo);
    memo[i] =  Math.max(includeFirst, excludeFirst);
    return memo[i]
};



  