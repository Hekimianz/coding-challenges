// 1.	Perform binary search:
// •	If arr[mid] === 0, move left (but keep checking if this is the first zero).
// •	If arr[mid] === 1, move right.
// 2.	When you find the first 0, the number of zeroes is: arr.length - indexOfFirstZero.

const countZeros = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let firstZero = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 0) {
      firstZero = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return firstZero === -1 ? 0 : arr.length - firstZero;
};
