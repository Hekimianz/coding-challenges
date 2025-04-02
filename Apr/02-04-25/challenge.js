// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        const sum = nums[i] + nums[j];
        if (sum === target) return [i, j];
      }
    }
  }
};

const twoSumHashMap = (nums, target) => {
  // init hash map
  const hashMap = {};
  let result = [];
  // loop through the nums array to build the hash map and check for complement num
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    // check if complement is in hash map
    // if it is return the num and the complement
    // if its not, then add the num to hash map and move on to next num
    if (complement in hashMap) {
      return [hashMap[complement], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};
console.log(twoSumHashMap([2, 7, 11, 15], 9), 'Expected: [0,1]'); // expected: [0,1]
console.log(twoSumHashMap([3, 2, 4], 6), 'Expected: [1,2]'); // expected: [1,2]
console.log(twoSumHashMap([3, 3], 6), 'Expected: [0,1]'); // expected: [0,1]
