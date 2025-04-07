// Challenge: Same Frequency

// Write a function sameFrequency(num1, num2) that takes two positive integers and returns true if the two numbers have the same frequency of digits.

// •	No converting to arrays of digits — treat the numbers as strings if needed.
// •	Don’t use sorting — aim for O(n) time.

const sameFrequency = (num1, num2) => {
  // takes in two numbers
  // convert nums to string
  const stringNum1 = num1.toString();
  const stringNum2 = num2.toString();
  // if length of stringNum1 is different than the length of stringNum2 return false
  if (stringNum1.length !== stringNum2.length) return false;
  // build a frequency counter obj for num1
  const lookup = {};
  for (let digit of stringNum1) {
    lookup[digit] = (lookup[digit] || 0) + 1;
  }
  // loop over num2 and compare with frequency counter obj
  // if digit is found in frequency obj subtract one from that counter
  // if its not found or if value is falsy, return false
  for (let digit of stringNum2) {
    if (!lookup[digit]) return false;
    lookup[digit] -= 1;
  }
  // returns true if they have the same frequency/count of digits, false otherwise
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
