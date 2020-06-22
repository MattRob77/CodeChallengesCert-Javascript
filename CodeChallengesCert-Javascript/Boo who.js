// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.


function booWho(bool) {
  return bool;
}

booWho(null);


solution:
function booWho(bool) {
  if (bool === true || bool === false) { //if boolean input is true or boolean false, if it is
    return true; //return true
  } else { //else
    return false //return false 
  }
}

booWho(null);
