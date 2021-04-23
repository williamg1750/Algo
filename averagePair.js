//averagePair
// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target, but we just want the first pair.

function averagePair(array, target) {
  if (!array[0]) return false;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if ((array[left] + array[right]) / 2 === target) return true;
    if ((array[left] + array[right]) / 2 > target) right--;
    if ((array[left] + array[right]) / 2 < target) left++;
  }
  return false;
}
