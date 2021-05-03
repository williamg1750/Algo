//native string search pseudocode

//create a fucntion to take in a string and the target value that you are looking for
//make a for loop that loop thru  the string
//if the first letter mataches with the first value increse the i

const nativeStringSearch = (string, target) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== string[i + j]) break;
      if (j === target.length - 1) counter++;
    }
  }
  return counter;
};

//'mynameiswilliam','will'
//         w
