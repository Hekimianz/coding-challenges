// ***************************************************************  INSTRUCTIONS  ***************************************************************

// Frequency Counter Pattern Practice

// Given two arrays of numbers, write a function that checks whether the second array consists of the items in the first array squared.Given

// Example 1:
// [1, 2, 1], [4, 1, 1] -> true

// Example 2:
// [1, 2, 3, 4], [4, 16, 1, 9] -> true

// ***************************************************************  INSTRUCTIONS  ***************************************************************

const compareIfSquared = (arr1, arr2) => {
  // takes in two arrays (arr1 and arr2)
  // if arr1's length is different than arr2's, return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // create two empty counter objects
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // populate each counter object with the frequency of each item in each array
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // compare both objects, if same return true, if not, return false
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  // return true if arr2 consists of items in arr1 but squared
  return true;
};
