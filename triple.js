/*
Function: triple
----------------
This function accepts a single parameter 'x' and outputs its value multiplied by three.

Example:
 triple(5); // prints 15
*/
function triple(x){
	// Calculates the triple of x
    let tripleX = 3 * x;

    // Prints the result to the console.
    console.log(tripleX);
}

// Test the function with several numbers.
triple(-10);  // Expected output: -30
triple(0);    // Expected output: 0
triple(3);    // Expected output: 9
triple(5);    // Expected output: 15
triple(10);   // Expected output: 30
triple(50);   // Expected output: 150
