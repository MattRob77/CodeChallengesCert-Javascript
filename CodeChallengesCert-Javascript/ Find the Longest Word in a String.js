// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

function findLongestWordLength(str) {
  var words = str.split(' '); //convert the string into an array
  var maxLength = 0; //declare a variable of 0

  for (var i = 0; i < words.length; i++) { //compare the current word to the previous
    if (words[i].length > maxLength) {
      maxLength = words[i].length; //storing the longest word
    }
  }

  return maxLength; //returns the variable maxLength 
}


solution:
