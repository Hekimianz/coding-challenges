// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// P: integer n & string s
// R: s repeated n times
// E: repeatStr(2, 'hi') - 'hihi' / repeatStr(10, 'l') - 'llllllllll'
// P:
// loop over n times and concatenate n times same string

function repeatStr(n, s) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += s;
  }
  return result;
}
