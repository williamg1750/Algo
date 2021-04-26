//factorial recursion

// Write a function&nbsp;<strong>factorial</strong> which accepts a number and
// returns the factorial of that number. A&nbsp;factorial is the product of an
// integer and all the integers below it; e.g., factorial four (&nbsp;<em>4!</em>
// &nbsp;) is equal to 24, because 4 *&nbsp;3&nbsp;* 2 * 1 equals 24.&nbsp;
// <strong> factorial zero (0!) is always 1.</strong>

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// FACTORIAL SOLUTION
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
