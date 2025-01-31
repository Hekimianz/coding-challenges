// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false

const isTriangle = (a, b, c) => {
  if (a < 1 || b < 1 || c < 1) return false;
  const sorted = Array.from([a, b, c]).sort((x, y) => x - y);
  return sorted[0] + sorted[1] > sorted[2];
};
