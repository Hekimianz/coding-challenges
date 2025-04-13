// Two Pointers: Sorted Array - Sum Zero
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// You must use the two-pointer pattern, and you must not use .includes, .indexOf, or similar methods.

// Examples:
// sumZero([-3, -2, -1, 0, 1, 2, 3])     [-3, 3]
// sumZero([-6, -4, -2, 0, 1, 2, 5])         [-2, 2]
// sumZero([-2, 0, 1, 3])                undefined
// sumZero([1, 2, 3])                    undefined

// Constraints:
// 	•	Input array is sorted in ascending order.
// 	•	Time complexity must be O(n).
// 	•	Space complexity should be O(1).

// takes as input an arr
// returns an array of two ints inside of input arr that together sum 0

const sumZero = (arr) => {
  // initialize two pointers, one at 0, and one at the last index of arr (p1, p2)
  let p1 = 0;
  let p2 = arr.length - 1;
  // while p1 is less than p2:
  while (p1 < p2) {
    // check the sum of the values at p1 and p2
    const sum = arr[p1] + arr[p2];
    // if the sum is 0 return both values
    if (sum === 0) return [arr[p1], arr[p2]];
    // if the sum is negative increment p1
    if (sum < 0) {
      p1++;
    }
    // is the sum is positive decrement p2
    else {
      p2--;
    }
  }
};
