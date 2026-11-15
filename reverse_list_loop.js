/*

Write a function that reverses a list:
function reverseList(arr)

You should create a new array inside the function that contains the elements of arr in reverse order, and return it. It is okay to modify the original array arr inside the function.

Print out the reversed list to make sure your function works!

Consider the following code snippet:

var arr = [1,2,3,4];
var reversed = reverseList(arr);
println(reversed);

Depending on the environment you are running your code in (a setting you can change in your editor), your output for the code above can look like this:

4,3,2,1

Or this:

[4,3,2,1]

Both outputs are acceptable for this exercise.

*/

// This function will be used to set pre-defined rules of reversing the list. 
function reverseList(arr) {
    var reversedArr = []; // Creates an empty array, which will later be used to 'push' elements into.
    
    for (var i = arr.length - 1; i >= 0; i--) { // Where we would usually iterate forwards, we'll be iterating backwards to make the list "reversed".
        reversedArr.push(arr[i]); // 'Pushes' the new element to the end of the array.
    }
    
    return reversedArr; // Returns the new list, fully reversed.
}

// This function is what will put everything through the main test.
function start(){
    var arr = [1,2,3,4]; // Creates a new list to test out if it reverses the numbers from this list of numbers.
    var reversed = reverseList(arr);
    // Prints out the list of reversed numbers from the new list.
    console.log(reversed);
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
