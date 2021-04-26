//reverse

// Write a recursive function called <strong>reverse</strong> which accepts a
// string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(string) {
  // add whatever parameters you deem necessary - good luck!
  let reversed = '';
  const reverse2 = (string) => {
    if (string.length === 0) return;
    reversed += string[string.length - 1];
    return reverse2(string.slice(0, string.length - 1));
  };
  reverse2(string);
  return reversed;
}
