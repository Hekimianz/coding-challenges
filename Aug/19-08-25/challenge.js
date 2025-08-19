// Problem:
// Write a function sumZero(arr) which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero, or undefined if a pair does not exist.

// Constraints & Expectations:
// 	•	The input array is sorted in ascending order.
// 	•	Your solution should run in O(n) time and O(1) space.
// 	•	Brute-force nested loops are not allowed.
// 	•	Use the multiple pointers pattern.

// Examples:
// sumZero([-3,-2,-1,0,1,2,3])    // [-3, 3]
// sumZero([-2,0,1,3])            // undefined
// sumZero([1,2,3])               // undefined

function sumZero(array) {
  if (array.length < 2) return undefined;
  let j = 0;
  let k = array.length - 1;
  while (j < k) {
    const sum = array[j] + array[k];
    if (sum === 0) return [array[j], array[k]];
    else if (sum < 0) j++;
    else k--;
  }
  return undefined;
}

// Tests
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // expect [-2, 2]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // expect [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // expect undefined
console.log(sumZero([1, 2, 3])); // expect undefined
console.log(sumZero([-5, -4, -4, -4, 0, 4, 4, 6])); // expect [-4, 4] (first valid pair)
console.log(sumZero([])); // expect undefined
console.log(sumZero([0, 0])); // expect [0, 0]
