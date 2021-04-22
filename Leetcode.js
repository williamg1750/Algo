// frequency counter - valid anagram
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another]

//my code
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  let hm1 = {};
  let hm2 = {};
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (hm1[str1[i]]) {
      hm1[str1[i]]++;
    } else {
      hm1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (hm2[str2[i]]) {
      hm2[str2[i]]++;
    } else {
      hm2[str2[i]] = 1;
    }
  }
  for (let key in hm1) {
    if (!hm2[key]) return false;
    if (hm1[key] !== hm2[key]) return false;
  }
  return true;
}
//Colt Steele code
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
