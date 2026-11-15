/*

Write a function to square a number using return values. Squaring a number means multiplying it by itself. Then make several calls to that function in your start function to test it out. Your square function should only return a value, not print anything.

For example a function call like

var x = square(5);
should put the value 25 in x.

*/

// This is a function that returns the square of a number.
function square(x) {
  // Multiply the x by itself to get its square.
  let squaredX = x * x;

  // Returns the result to the caller.
  return squaredX;
}

// This is a function that tests the square function with several numbers.
function start(){
    console.log(square(10)); // Expected output: 100
    console.log(square(3)); // Expected output: 9
    console.log(square(0)); // Expected output: 0
    console.log(square(-10)); // Expected output: 100
    console.log(square(50)); // Expected output: 2500
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
