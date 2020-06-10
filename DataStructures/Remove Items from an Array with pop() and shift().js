// Basic Data Structures: Remove Items from an Array with pop() and shift()
// Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). As you may have guessed by now, instead of adding, pop() removes an element from the end of an array, while shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.
//
// Let's take a look:
//
// let greetings = ['whats up?', 'hello', 'see ya!'];
//
// greetings.pop();
// // now equals ['whats up?', 'hello']
//
// greetings.shift();
// // now equals ['hello']
// We can also return the value of the removed element with either method like this:
//
// let popped = greetings.pop();
// // returns 'hello'
// // greetings now equals []
// We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
//


function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));


solution:
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
