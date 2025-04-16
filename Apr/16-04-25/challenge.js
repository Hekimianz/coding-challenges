// You are to implement a function findPair(arr, num) that returns true if any two values in the array differ by exactly num. The difference should be absolute, meaning:
// 	•	Math.abs(a - b) === Math.abs(num)
// 	•	The input array may contain duplicates, negatives, zero
// 	•	Order does not matter
// 	•	You should not return the actual pair—just a boolean

// The challenge has two parts, each with different performance constraints:

// ✅ Part 1 Requirements:
// 	•	Time: O(n)
// 	•	Space: O(n)

// So you’re expected to use a frequency counter, set, or hashmap.

// ⸻

// ✅ Part 2 Requirements:
// 	•	Time: O(n log n)
// 	•	Space: O(1)

// So this means sorting the array (O(n log n)) and using a two-pointer approach with no extra data structures.

// Takes an unsorted arr, and a int n.
// returns true if any pair of ints' (in the arr) absolute difference equals n, false otherwise.

// PLAN FOR FREQUENCY COUNTER:
// - If arr is empty, return false
// - Initialize a Set to store seen values
// - For each number in the array:
//     - If n === 0:
//         - If number already exists in the Set, return true (we found a duplicate)
//     - Else:
//         - Check if (number + n) exists in Set OR (number - n) exists in Set
//           - If yes, return true
//     - Add number to the Set
// - If loop completes, return false

const findPairFrequency = (arr, n) => {
  if (arr.length < 2) return false;
  const seen = new Set();
  for (let value of arr) {
    if (n === 0) {
      if (seen.has(value)) return true;
    } else {
      if (seen.has(value + n) || seen.has(value - n)) return true;
    }
    seen.add(value);
  }
  return false;
};

// PLAN FOR POINTERS:
// - If array length < 2, return false
// - Sort the array numerically (ascending)
// - Initialize two pointers: i = 0, j = 1
// - While j < arr.length:
//   - If i === j, increment j (you can't compare same element)
//   - Calculate diff = arr[j] - arr[i]
//   - If diff === n, return true
//   - If diff < n, increment j (you need a bigger difference)
//   - If diff > n, increment i (you need a smaller difference)
// - If loop ends, return false

const findPairPointers = (arr, n) => {
  if (arr.length < 2) return false;
  const sortedArr = arr.toSorted((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (j < sortedArr.length) {
    if (i === j) {
      j++;
      continue;
    }
    const diff = sortedArr[j] - sortedArr[i];
    if (diff === n) return true;
    if (diff < n) {
      j++;
    } else if (diff > n) {
      i++;
    }
  }
  return false;
};

console.log(findPairPointers([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
