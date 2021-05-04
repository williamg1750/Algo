//insertionSort
//good for live data streams
//psuedo code

//this might be the hardest sort tha i encountered so far

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    //this secound loop go backwards
    //must use var to define j beacuse we call j outside of the loop
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

//[2,1,9,76,4]
//let currentVal = arr[i] --> currentVal = 1

//var j = i - 1; j >= 0 && arr[j] > currentVal --> true  arr[0] > 1
//arr[j + 1] = arr[j] --> arr[1] = arr[0] --> 1 = 2 --> [2, 2, 9, 76, 4];
//arr[j + 1] = currentVal; --> arr[1] = 1
