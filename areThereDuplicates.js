// areThereDuplicates;
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true

function areThereDuplicates(...arg) {
  let sorted = arg.sort();
  for (let i = 0; i < arg.length - 1; i++) {
    let pointerA = arg[i];
    let pointerB = arg[i + 1];
    if (pointerA === pointerB) return true;
  }
  return false;
}
