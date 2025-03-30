// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
const take = (arr, n) => arr.splice(0, n);

console.log(take([1, 2, 3, 4, 5], 2));
