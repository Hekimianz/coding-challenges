// Recursion: productOfArray

// You need to write a function called productOfArray which accepts an array of numbers and returns the product of all the numbers in the array.
// You must use recursion — no loops allowed.

// EXAMPLES:
// productOfArray([1, 2, 3, 4]) // should return 24 (1 * 2 * 3 * 4)
// productOfArray([5, 10, 2])    // should return 100 (5 * 10 * 2)
// productOfArray([7])           // should return 7
// productOfArray([])            // should return 1 (empty array)

// Input: array of ints (arr)
// Output: Int representing the product of all ints in arr

// PLAN:
// If arr is empty, return 1
// return arr[0] * productOfArray(arr.slice(1))

// productOfArray([1, 2, 3, 4])
//      1 * productOfArray([2, 3, 4]) -> 24
//          2 * productOfArray([3, 4]) -> 24
//              3 * productOfArray([4]) -> 12
//                  4 * productOfArray([]) -> 4

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
