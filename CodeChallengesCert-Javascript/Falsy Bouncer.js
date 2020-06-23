// Falsy Bouncer
// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);



solution:
function bouncer(arr) { //created function bouncer with one arg which is the array
  return arr.filter(Boolean) //used .filter that creats and returns a new array with elements that pass the boolean test above
}

bouncer([7, "ate", "", false, 9]);
