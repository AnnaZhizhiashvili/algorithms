function binarySearch(arr, value) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  while (arr[middleIndex] !== value && rightIndex >= leftIndex) {
    if (value > arr[middleIndex]) leftIndex = middleIndex + 1;
    else rightIndex = middleIndex - 1;
    middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  }
  return arr[middleIndex] === value ? middleIndex : -1;
}

// console.log(binarySearch([1, 3, 5, 7, 10, 20], 20));

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right)/2);
  while(left < right) {
    if(target > nums[middle]) {
      left = middle + 1;
    }
    else if(target < nums[middle]) {
      right = middle;
    }
    else {
      return middle;
    }
    middle = Math.floor((left + right)/2);
  }
  if(target > nums[middle]) {
    return right + 1;
  }
  return middle;

};
console.log(searchInsert([1, 3 ], 0));





