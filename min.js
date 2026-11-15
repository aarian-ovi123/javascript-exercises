/*

Write a function called min that returns the minimum of the two numbers passed in as parameters.

For example, if you made a call like:

let x = min(10, 14);
x should have the value 10.

For your program, you need to define the function and call it and print out the result like:

let x = min(10, 14);
console.log("The min is " + x);

*/

// This is a function that compares two numbers to determine which of the two is the minimum value.
// Uses if/else statements to compare the two numbers.
function min(x, y) {
 // If x is less than y, x is the smaller number.
    if (x < y) {
        return x;
    } 
    // Otherwise, y is the smaller (or equal) number.
    else {
        return y;
    }
}

// This is the main function to test the comparison values.
function start() {
    let minimalDecisionOne = min(10, 14); // Expected Output: 10
    let minimalDecisionTwo = min(0, 1); // Expected Output: 0
    let minimalDecisionThree = min(50, 54); // Expected Output: 50
    let minimalDecisionFour = min(-5, -5); // Expected Output: -5
    let minimalDecisionFive = min(3, 6); // Expected Output: 3
    let minimalDecisionSix = min(6, 3); // Expected Output: 3
    let minimalDecisionSeven = min(100, 1000); // Expected Output: 100
    let minimalDecisionEight = min(9000, 9001); // Expected Output: 9000
    
    // Prints the test outputs.
    console.log("The min is " + minimalDecisionOne); 
    console.log("The min is " + minimalDecisionTwo);
    console.log("The min is " + minimalDecisionThree);
    console.log("The min is " + minimalDecisionFour);
    console.log("The min is " + minimalDecisionFive);
    console.log("The min is " + minimalDecisionSix);
    console.log("The min is " + minimalDecisionSeven);
    console.log("The min is " + minimalDecisionEight);
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
