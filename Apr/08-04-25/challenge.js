// Challenge: Are There Duplicates

// Implement a function areThereDuplicates() which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Constraints:
// 	•	Solve it using a frequency counter
// 	•	Aim for O(n) time.

// Examples:
// areThereDuplicates(1, 2, 3);        // false
// areThereDuplicates(1, 2, 2);        // true
// areThereDuplicates('a', 'b', 'c');  // false
// areThereDuplicates('a', 'b', 'a');  // true

const areThereDuplicates = (...args) => {
  // build a frequency counter out of args array
  // return true if any counter is above 1
  const counter = {};
  for (let val of args) {
    if (counter[val] >= 1) return true;
    counter[val] = (counter[val] || 0) + 1;
  }
  return false;
};
