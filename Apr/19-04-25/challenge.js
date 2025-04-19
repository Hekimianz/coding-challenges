// Recursion: factorial

// Write a function called factorial which accepts a non-negative integer n, and returns the factorial of n.

// As a reminder:
// 	•	The factorial of 0 is 1.
// 	•	For any n > 0, factorial of n is the product of all integers from n down to 1.

// EXAMPLES:
// factorial(1); // 1
// factorial(2); // 2
// factorial(4); // 24
// factorial(7); // 5040

// Constraints:
// 	•	You must use recursion.
// 	•	No loops.
// 	•	No array helpers like reduce or map.

// Input: integer (n)
// Output: Integer representing n! (n factorial)

// PLAN:
// If n is 0 return 1
// Return n * factorial(n-1)

// factorial(4)
//      4 * factorial(3)
//          3 * factorial(2)
//              2 * factorial(1)
//                  1 * factorial(0)

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
