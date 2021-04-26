//Write a function called
//sameFrequency
//Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(int1, int2) {
  let hashMap = {};
  int1 = String(int1);
  int2 = String(int2);
  if (int1.length !== int2.length) return false;

  for (let i = 0; i < int1.length; i++) {
    hashMap[int1[i]] ? hashMap[int1[i]]++ : (hashMap[int1[i]] = 1);
    //wrong have no clue why this code would be wrong
    //   let currenthashnum = hashMap[int1[i]]
    //   currenthashnum ? currenthashnum++ : currenthashnum=1
  }

  for (let j = 0; j < int2.length; j++) {
    if (!hashMap[int2[j]]) {
      return false;
    } else {
      hashMap[int2[j]]--;
    }
  }

  return true;
}


//colt steele code
sameFrequency Solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
