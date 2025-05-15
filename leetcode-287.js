// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3


// Floyd's Tortoise and Hare (Cycle Detection)
// Time Complexity: O(n)
// Space Complexity: O(1)
// Explanation:
// we imagine the array as a linked list, where each element points to the next element.
// the repeated number is the start of the cycle, because if we have a repeated number, several numbers will point to it and in linked list, cycle will be formed
// we use two pointers, slow and fast, to find the start of the cycle
// slow pointer moves one step at a time, while fast pointer moves two steps at a time
// when slow and fast pointers meet, we know that we are in the cycle
// when they meet, we break the loop
// then main idea is that the distance between the start of the linked list and the start of the cycle is the same as the distance between slow/fast first intersection point and the start of the cycle
// so we can move slow pointer to the start of the linked list and fast pointer to the first intersection point and move them one step at a time until they meet
// therefore we start from the beginning of the linked list and the intersection point and move them one step at a time until they meet

var findDuplicate = function(nums) {
    let slow = 0; let fast = 0;

    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) {
            break;
        }
    }

    let start = 0;
    while(start !== slow) {
        start = nums[start];
        slow = nums[slow];
    }
    return start;
};