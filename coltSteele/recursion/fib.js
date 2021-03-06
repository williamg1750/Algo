//fib recursion

// Write a recursive function called <strong>fib</strong> which accepts a number
// and returns the <em>n</em>th number in the Fibonacci sequence. Recall that the
// Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the
// sum of the previous two numbers.

// FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
