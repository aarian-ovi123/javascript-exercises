/*

Write a function called quadruple that quadruples a number and returns the result. Then in your start function, make several calls to the quadruple function to test it out.

For example, if you made a call like

var x = quadruple(3);
then x should hold the value 12.

*/

// This is a function that quadruples the number.
function quadruple(x) {
    // Multiplies the input by 4.
    let quadrupledValue = x * 4;
    // Returns the results.
    return quadrupledValue;
}

// This is the main function to test the quadruple function.
function start() {
    console.log(quadruple(5)); // Expected output: 20
    console.log(quadruple(10)); // Expected output: 40
    console.log(quadruple(3)); // Expected output: 12
    console.log(quadruple(0)); // Expected output: 0
    console.log(quadruple(-10)); // Expected output: -40
    console.log(quadruple(50)); // Expected output: 200
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
