// Problem: areThereDuplicates

// Write a function areThereDuplicates(...args) that accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.

// Examples:
// areThereDuplicates(1, 2, 3)              // false
// areThereDuplicates(1, 2, 2)              // true
// areThereDuplicates('a', 'b', 'c', 'a')   // true
// areThereDuplicates()                     // false

// Constraints & Expectations
// 	•	Must run in O(n) time and O(n) space.
// 	•	You may not sort the arguments.
// 	•	Use the frequency counter pattern (build a map of seen values, then detect duplicates).
// 	•	Handle any data type that can be compared with strict equality (===).

function areThereDuplicates(...args) {
  const counter = {};

  for (let v of args) {
    if (counter[v]) return true;
    counter[v] = 1;
  }

  return false;
}

// TESTS:
// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
// console.log(areThereDuplicates()); // false
// console.log(areThereDuplicates(true, false, true)); // true
// console.log(areThereDuplicates(null, undefined, null)); // true

// PROBLEM 2:
// Switch it up
// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.

function switchItUp(n) {
  switch (n) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Not a valid number';
  }
}
