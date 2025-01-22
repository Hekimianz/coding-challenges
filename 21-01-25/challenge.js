// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray = (arr) => {
  const odds = arr.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    } else {
      result.push(odds[0]);
      odds.shift();
    }
  }
  return result;
};


