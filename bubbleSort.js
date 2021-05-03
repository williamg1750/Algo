//bubble sort
//pseudocode

//naive answer
const bubbleSort = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

//[7,3,6,2,5,9,1,4,8]
