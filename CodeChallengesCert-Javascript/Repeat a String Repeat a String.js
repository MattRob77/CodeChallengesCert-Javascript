// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
//


function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);



solution:
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
