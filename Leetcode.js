// frequency counter - valid anagram
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another]

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
