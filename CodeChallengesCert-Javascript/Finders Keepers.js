// Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


solution:
function findElement(arr, func) { //created function to find element
  return arr.find(func); // used .find method to return first element
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
