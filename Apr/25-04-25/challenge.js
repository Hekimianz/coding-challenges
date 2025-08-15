// Naive String Search

// Write a function that counts the number of times a given substring appears in a string.

// EXAMPLES:
// stringSearch("wowomgzomg", "omg") // 2
// stringSearch("harold went haha at harry's", "ha") // 4
// stringSearch("i like pizza", "ha") // 0

const stringSearch = (str, sub) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) break;
      if (j === sub.length - 1) count++;
    }
  }
  return count;
};

console.log(stringSearch('wowomgzomg', 'omg')); // 2
console.log(stringSearch("harold went haha at harry's", 'ha')); // 4
console.log(stringSearch('i like pizza', 'ha')); // 0
