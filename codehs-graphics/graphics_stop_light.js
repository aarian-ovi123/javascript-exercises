/*

Write a program that draws a stoplight. You should have a gray rectangle, and then three circles in the rectangle. The circles should be red, then yellow, then green. You should use the drawCircle function from the video.

The rectangle should be centered on the screen. The yellow light should be centered on the screen, and the red and green light should be offset by BUFFER amount.

*/


// --- Constants ---
const LIGHT_RADIUS = 35; // Radius of each light (circle).
const STOPLIGHT_WIDTH = 120; // Width of the stoplight body.
const STOPLIGHT_HEIGHT = 350; // Height of the stoplight body.
const BUFFER = 100; // Spacing between each light
const GRAY_COLOR = "#737071"; // Color of the stoplight body.

/*

  Function: drawCircle
  --------------------
  Draws a colored circle at a specific position.

  Parameters:
    radius → the distance between any point on the circle and the center of the circle.
    color → the color of the circle.
    x, y → coordinates for the circle's position.
    
*/

function drawCircle(radius, color, x, y) {
    let circle = new Circle(radius); // Creates a new circle with the given radius.
    circle.setColor(color); // Sets the color of the circle.
    circle.setPosition(x, y); // Moves it to the desired (x, y) position.
    add(circle); // Adds the circle to the screen.
}

/*

  Function: start
  ---------------
  Draws the stoplight structure and adds the red, yellow, and green lights.
  
*/

function start() {
    // Creates the gray rectangle (the stoplight body).
    let rect = new Rectangle(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
    // Positions the rectangle at the center of the canvas.
    // Subtracting half the rectangle's size from the canvas's center keeps it centered on any canvas size.
    rect.setPosition((getWidth() - STOPLIGHT_WIDTH) / 2, (getHeight() - STOPLIGHT_HEIGHT) / 2);
    rect.setColor(GRAY_COLOR); // Sets the color to gray using a predefined constant.
    add(rect); // Adds the rectangle to the screen.

    // Draws the yellow light (middle).
    drawCircle(LIGHT_RADIUS, "#FFFF00", getWidth() / 2, getHeight() / 2);

    // Draws the red light (top) using the BUFFER value to set the position.
    drawCircle(LIGHT_RADIUS, "#FF0000", getWidth() / 2, (getHeight() / 2) - BUFFER);

    // Draws the green light (bottom) using the BUFFER value to set the position.
    drawCircle(LIGHT_RADIUS, "#00FF00", getWidth() / 2, (getHeight() / 2) + BUFFER);
}
