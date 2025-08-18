// Your task: Implement a JavaScript function sameKthPowerFrequency(arr1, arr2, k) that returns a boolean.

// Requirements (strict):
//  1.  Do not use sorting.
//  2.  Time: O(n); Space: O(n).
//  3.  Use one frequency map built from arr1’s k-th powers.
//  4.  Handle negatives and zeros correctly.
//  5.  Fail fast:
//      • Length mismatch or invalid k (non-integer or < 1) → false.
//      • When consuming arr2, if a value is missing or its count is zero → false.
//  6.  Either:
//      • Do a final “all-zero” verification over the map, or
//      • Clearly justify (in comments) why your traversal guarantees no leftovers.

// Also include a tiny test harness (plain console logs are fine) with at least these cases:
//  • [2,3] vs [8,27], k=3 → true
//  • [-2,2] vs [4,4], k=2 → true
//  • [-2,2] vs [8,8], k=3 → true
//  • [0,0,2] vs [0,0,4], k=2 → true
//  • [2,3] vs [8,8], k=3 → false
//  • [0,2] vs [4], k=2 → false

function sameKthPowerFrequency(arr1, arr2, k) {
  if (arr1.length !== arr2.length || !Number.isInteger(k) || k < 1)
    return false;

  const freqCounter = Object.create(null);

  for (let v of arr1) {
    const value = Math.pow(v, k);
    freqCounter[value] = (freqCounter[value] || 0) + 1;
  }

  for (let v of arr2) {
    if (!(v in freqCounter) || freqCounter[v] === 0) return false;
    freqCounter[v]--;
  }

  for (const count of Object.values(freqCounter)) {
    if (count !== 0) return false;
  }
  return true;
}

console.log(sameKthPowerFrequency([2, 3], [8, 27], 3)); // true
console.log(sameKthPowerFrequency([-2, 2], [4, 4], 2)); // true
console.log(sameKthPowerFrequency([-2, 2], [8, 8], 3)); // true
console.log(sameKthPowerFrequency([0, 0, 2], [0, 0, 4], 2)); // true
console.log(sameKthPowerFrequency([2, 3], [8, 8], 3)); // false
console.log(sameKthPowerFrequency([0, 2], [4], 2)); // false
