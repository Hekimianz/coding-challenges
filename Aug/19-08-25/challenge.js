// Implement a function countUniqueValues(arr) that accepts a sorted array of integers (may include negatives). Return the number of unique values.

// Constraints:
// 	•	Time: O(n)
// 	•	Space: O(1)
// 	•	Do not use extra data structures like sets or hash maps.
// 	•	Use the multiple pointers pattern.

// Edge cases to consider:
// 	•	Empty array → should return 0.
// 	•	Array of all duplicates → should return 1.
// 	•	Array with only one element → should return 1.

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let j = 0;
  let k = 1;
  let counter = 1;
  while (k !== arr.length) {
    if (arr[j] !== arr[k]) {
      counter++;
      j = k;
    }
    k++;
  }
  return counter;
}

console.log(countUniqueValues([])); // 0;
console.log(countUniqueValues([1, 1, 1, 1, 1])); // 1
console.log(countUniqueValues([1, 2, 3, 4, 5])); // 5
console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 4, 5])); // 5
console.log(countUniqueValues([-3, -2, -2, 0, 1, 1, 2])); // 5;
console.log(countUniqueValues([42])); // 1;
