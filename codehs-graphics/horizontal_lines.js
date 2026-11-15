/*

The `horizontalLine` function draws a horizontal line. Both endpoints of the line share a common y-value, and the line starts at x = 0. It accepts two inputs: `y` specifies the line's vertical location, and `length` defines its extent. For instance, `horizontalLine(100, 200)` draws a line that begins at coordinates (0, 100) and spans 200 pixels.

*/

// Creates a horizontal line at a specified y-coordinate with a defined length.

function horizontalLine(y, length) {

    // Creates a new line from (0, y) to (length, y).
    let line = new Line(0, y, length, y);
    // Adds the line to the screen.
    add(line);

}

/*

Function: start {
    This function tests the horizontalLine function using different inputs. Each call draws a horizontal line at a set y-coordinate and length.
}

*/

function start() {

    horizontalLine(0, 5); // Very short line at the top of the screen.
    horizontalLine(100, 200); // Mid-length line near the top.
    horizontalLine(200, 100); // Shorter line lower down.
    horizontalLine(300, 20); // Tiny line at mid height.
    horizontalLine(500, 100); // Line near the bottom.

}
