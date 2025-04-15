// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

// takes in two strings, sub, and full.
// returns true if you can build the sub using chars from full, order matters. If you didn't use a char from full at one point you cant use it at a future point. Return false if not able to build sub.

// EXAMPLES:
// isSubsequence("", "hello") -> true
// isSubsequence("hello", "") -> false
// isSubsequence("12", "132") -> true

// PLAN:
// - If sub is an empty string, return true
// - initialize a pointer i at 0
// - loop over full using j as the second pointer, starting at 0
// - Compare chars at each position
//   - If they are the same, add one to i
//   - If they are different continue
// - At the end of the loop if i = sub.length return true, false otherwise

const isSubsequence = (sub, full) => {
  if (sub.length < 1) return true;
  let i = 0;
  for (let j = 0; j < full.length; j++) {
    if (sub[i] === full[j]) {
      i++;
    }
    if (i === sub.length) return true;
  }
  return false;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
