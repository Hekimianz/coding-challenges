// Recursion: recursiveRange

// The function should accept a number and return the sum of all numbers from 0 to that number using recursion.

// Input: int (n)
// Output: an int representing the sum from 0 up to n

// EXAMPLES:
// recursiveRange(4) // 10 (0 + 1 + 2 + 3 + 4)
// recursiveRange(5) // 15 (0 + 1 + 2 + 3 + 4 + 5)
// recursiveRange(0) // 0

// PLAN:
// If n is 0 return 0
// Return n + recursiveRange(n - 1)

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}
