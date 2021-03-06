//recursiveRange recursion

// Write a function called <strong>recursiveRange</strong> which accepts a number
// and adds up all the numbers from 0 to the number passed to the function&nbsp;

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// RECURSIVE RANGE SOLUTION
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
