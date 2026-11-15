/*

Write a function called:
function onlyEvens(arr)

That takes an array and returns an array with only the even numbers in the original array.

Then, you should print out the new list.

Consider the following code snippet:

var arr = [1,2,3,4,5,6];
var evens = onlyEvens(arr);
println(evens);

Depending on the environment you are running your code in (a setting you can change in your editor), your output for the code above can look like this:

2,4,6

Or this:

[2,4,6]

Both outputs are acceptable for this exercise.

*/

// This function sets up the pre-defined rules of only taking only even numbers from the arrays.
function onlyEvens(arr) {
    var evenNumbers = []; // Creates an empty array, which will later be used to 'push' elements into.

    for (var i = 0; i < arr.length; i++) {
        var currentNumber = arr[i];

        if (currentNumber % 2 === 0) { // Using this if-statement will allow the program to figure out which number is an even number or odd number. 
            evenNumbers.push(currentNumber); // Once the program figures out which number is an even number, it pushes that number into the array known as 'evenNumbers'.
        }
    }

    return evenNumbers; // Returns the list of even numbers.
}

// This function is what will put everything through the main test.
function start(){
    var arr = [1,2,3,4,5,6]; // Creates a new list to test out if it takes out the even numbers from this list of numbers.
    var evens = onlyEvens(arr);
    // Prints out the list of even numbers.
    console.log(evens);
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
