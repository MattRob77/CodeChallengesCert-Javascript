// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
  return str.toLowerCase()
}

titleCase("I'm a little tea pot");


solution:
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
titleCase("I'm a little tea pot");
//lowercased the string str.toLowerCase()
//replaced the first letter to uppercase using.replace
//used /(^|\s)\S/g syntax to find all non-whitespaced characters starting at the beginning of the string or after the whitespace
//g is used for global
