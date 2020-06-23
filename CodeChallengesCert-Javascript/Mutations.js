// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);



solution:
function mutation(arr) {
  var test = arr[1].toLowerCase(); //made the two strings in the array lowercase. (test) will hold what we are looking for in target.
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) { //looped through test elements to search if they are not found return false
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
