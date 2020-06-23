// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  return arr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);


solution:
function chunkArrayInGroups(arr, size) { //created function
 if(arr.length <= size) { //if array is smaller return nested
   return [arr]; //larger array is split 
 } else {
   return [arr.slice(0, size)].concat (
     chunkArrayInGroups(arr.slice(size), size)
   );
 }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
