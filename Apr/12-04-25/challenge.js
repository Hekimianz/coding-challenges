// Two Pointers: countUniqueValues

// Implement a function called countUniqueValues which accepts a sorted Array, and counts the unique values in the Array.

// There can be negative numbers in the array, but it will always be sorted.

// Examples:
// countUniqueValues([1,1,1,1,2]) -> 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
// countUniqueValues([]) -> 0
// countUniqueValues([-2,-1,-1,0,1]) -> 4

// Takes an array
// returns an int representing the amount of unique values in the input array
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  // Create a pointer, starting at 0
  let i = 0;

  // loop over the array, comparing both pointers, if they are equal, add one to pointer 2, if they are diff, add one to p1 move the value of p2 into p1, and then add one to p2
  for (let j = 1; i < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // return pointer 1 + 1
  return i + 1;
};
