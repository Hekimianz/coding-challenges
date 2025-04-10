// Valid Digit Anagram Multiples

// Write a function digitAnagramMultiple(n1, n2) that returns true if n2 is a multiple of n1 and is also a digit anagram of n1.

// Constraints:
// 	•	You must use a frequency counter pattern (no sorting).
// 	•	Input numbers are positive integers.
// 	•	Aim for O(n) time where n is the number of digits.
// 	•	Treat leading zeros as invalid — i.e., digitAnagramMultiple(125, 0512) → false.

// Examples:
// digitAnagramMultiple(125, 512);     // true  (512 is 125 * 4, same digits)
// digitAnagramMultiple(125, 521);     // true  (521 is 125 * 4.168, false)
// digitAnagramMultiple(125, 5210);    // false (not a multiple)
// digitAnagramMultiple(123, 246);     // false (not an anagram)
// digitAnagramMultiple(111, 222);     // true  (111 * 2 = 222)

const digitAnagramMultiple = (num1, num2) => {
  // takes in two numbers
  // MULTIPLE
  // if n2 isn't a multiple of n1, return false
  if (num2 % num1 !== 0) {
    console.log('test 3 failed');
    return false;
  }
  // ANAGRAM
  // turn numbers into strings to make them iterable
  const string1 = num1.toString();
  const string2 = num2.toString();
  // if numbers don't have the same length or have leading zeros, return false
  if (string1.length !== string2.length || string2[0] === '0') {
    console.log('test 1 failed');
    return false;
  }

  // build frequency counter for number1
  const num1FrequencyCounter = {};
  for (let digit of string1) {
    num1FrequencyCounter[digit] = (num1FrequencyCounter[digit] || 0) + 1;
  }
  // compare frequency counter with n2
  for (let digit of string2) {
    if (!num1FrequencyCounter[digit]) {
      console.log('test 2 failed');
      return false;
    }
    num1FrequencyCounter[digit] -= 1;
  }

  // return true if number 2 if ANAGRAM and MULTIPLE sections don't return false
  return true;
};
