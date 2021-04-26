//capitalizeWords

// Write a recursive function called <strong>capitalizeWords</strong>. Given an
// array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  let capped = [];
  if (arr.length === 0) return capped;
  capped.push(arr[0].toUpperCase());
  capped = capped.concat(capitalizeWords(arr.slice(1)));
  return capped;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
