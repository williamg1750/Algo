//isPalindrome recursion

// Write a recursive function called <strong>isPalindrome</strong> which returns
// true if the string passed to it is a palindrome (reads the same forward and
// backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  // add whatever parameters you deem necessary - good luck!
  let reversed = '';
  let ogWord = string;
  const helperfunc = (string) => {
    if (string.length === 0) return;
    reversed += string[string.length - 1];
    return helperfunc(string.slice(0, string.length - 1));
  };
  helperfunc(string);
  return reversed === ogWord;
}

// isPalindrome Solution

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
