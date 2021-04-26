//capitalizeFirst

// Write a recursive function called <strong>capitalizeFirst</strong>. Given an
// array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  let cappedArr = [];
  const helperFunc = (arr) => {
    if (arr.length === 0) return;
    cappedArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    return helperFunc(arr.slice(1));
  };
  helperFunc(arr);
  return cappedArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
