// Recursion - power

// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

// EXAMPLES:
// power(2, 0) // 1
// power(2, 2) // 4
// power(2, 4) // 16

// Input: two integers (b: base, e:exponent)
// Output: Integer representing b to power of e

// PLAN:
// If exponent is 0 return 1
// Else return base multiplied by power(n, exponent - 1)

function power(b, e) {
  if (e === 0) return 1;
  return b * power(b, e - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
