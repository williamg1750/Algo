//linearSearchSudo

//sudo code

//function that takes a value to search for
//forloop looping thru the index
//compair the value to the arr[i] with the ===
//if not === value i++
//if equal return i which is the index
//return -1 at the bottom of the fucntion is it doesnt contain vlaue

function linearSearch(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }
  return -1;
}

//time complex is 0(n)
//space is 0
