/* 
Challenge 9

Create a function cycleIterator that accepts an array, and returns a function. 
The returned function will accept zero arguments. When first invoked, the 
returned function will return the first element of the array. When invoked 
a second time, the returned function will return the second element of the 
array, and so forth. After returning the last element of the array, the next 
invocation will return the first element of the array again, and continue 
on with the second after that, and so forth. 

To test your solution run
npm t cycle_iterator
from the command line

*/

function cycleIterator(array) {}

module.exports = cycleIterator;
