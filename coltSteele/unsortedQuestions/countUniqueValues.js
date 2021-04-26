//Multiple Pointers
//Given an array of integers, count the number of unique values.
//For example, if we have the following array:
// [1, 1, 1, 1, 1, 1, 3, 5]
// the count of original values is 3 => 1, 3, and 5.

//my code
function countUniqueValues(array) {
  // add whatever parameters you deem necessary - good luck!
  let uniqueValues = 0;
  for (let i = 0; i < array.length; i++) {
    let pointerA = array[i];
    let pointerB = array[i + 1];
    if (pointerA !== pointerB) uniqueValues++;
  }
  return uniqueValues;
}

//Colt Steele code
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
