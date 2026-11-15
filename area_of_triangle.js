/*
  Function: triangleArea
  ----------------------
    This function requires a 'base' and a 'height' as inputs, 
    then computes the area of a triangle.


      Area = 1/2 * base * height

  It then prints the computed area to the console.

  Example:
    triangleArea(5, 4); // prints 10
*/

function triangleArea(base, height) {
    // Calculate the area of the triangle using the formula.
    let area = 0.5 * base * height;

    // Print the area to the console
    console.log(area);
}

// Assess the function using varied base and height inputs.
// These calls confirm the function operates correctly across varied inputs.
triangleArea(5, 4);     // Expected output: 10
triangleArea(10, 2);    // Expected output: 10
triangleArea(3, 3);     // Expected output: 4.5
triangleArea(6, 10);    // Expected output: 30
triangleArea(50, 3);    // Expected output: 75
triangleArea(144, 5);   // Expected output: 360
