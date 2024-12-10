// 349. Intersection of two arrays
const intersection = function(nums1, nums2) {
    let nums1Set = new Set(nums1);
    let intersectionSet = new Set();
    for(let i = 0; i < nums2.length; i++) {
        if(nums1Set.has(nums2[i])) {
            intersectionSet.add(nums2[i])
        }
    }

    return Array.from(intersectionSet);
};

// 26. remove duplicates from sorted arr (in-place)
const removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
    }
    return nums.length;
};

// 27. remove element (in-place)

const removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

