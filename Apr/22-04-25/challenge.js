// Recursion - Fibonacci

// write a function called fib which accepts a number and returns the nth number in the fibonacci sequence.
// Recall that the fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8... which starts with 1 and 1, and where every number thereafter is equal to the sum of the prev two numbers

// Input: int (n)
// Output: Integer representing the nth place in the fibonacci seq

// PLAN:
// If n is 1 or 2 return 1
// return fib(n - 1) + fib(n - 2)

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// fib(5)
// fib(4) + fib(3)
// (fib(3) + fib(2)) + (fib(2) + fib(1))
// ((fib(2) + fib(1)) + 1) + (1 + 1)
// ((1 + 1) + 1) + (1 + 1) -> (3 + 2) // 5
