/* 
Challenge 6

Create a function called reduce
Parameters:
* callback - a function
* initialValue (optional)

Return value:
* the value that results from executing the callback function across the entire array

reduce() takes an array and reduces its elements to a single value. 
Example – summing numbers in an array:

const nums = [4, 1, 3];
function add (a, b) { 
  return a + b; 
}
reduce(nums, add, 0); //-> 8

Here's how it works. The function has an 'accumulator value' which is initialized as 
the initialValue argument (if it is provided – what happens if it's not provided 
is a small detail covered at the end) 

reduce() executes the callback once for each element in the array.   
reduce() automatically makes sure the callback always receives these arguments:
1. the 'accumulator' value in its current state
2. the current array element
3. the current array index
4. the whole array itself

3. and 4. are less commonly useful – but they're there if you need them.

On each iteration, reduce() waits for callback to return a value. 
reduce() then reassigns the 'accumulator' to that newly returned value.

The final value of the 'accumulator' after the whole array has been visited
is what gets returned by reduce() overall.

A clarification: if no argument is provided for initialValue
reduce() automatically initializes the accumulator to be the first array element,
and then begins iterating from the second element.

To test your solution run
npm t reduce
from the command line

*/

function reduce(array, callback, initialValue) {}

module.exports = reduce;
