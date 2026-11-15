/*
Function: square
--------------

This function takes one parameter, 'x', and prints the result of 'x' multiplied by itself.

For Instance:

square(5); // prints 25
*/

function square(x) {
    // Calculates the square of x
    let squaredX = x * x;

    // Prints the result to the console.
    console.log(squaredX);
}

// Test the function with several numbers.
square(5);    // Expected output: 25
square(10);   // Expected output: 100
square(3);    // Expected output: 9
square(0);    // Expected output: 0
square(-10);  // Expected output: 100
square(50);   // Expected output: 2500
