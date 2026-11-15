/*

Program Result
 
Write a function that draws a pool ball. This function should take as parameters, the color, the number that should go on the pool ball, and the location of the center of the pool ball.

The radius of the pool balls should be POOL_BALL_RADIUS, and the font of the number should be POOL_BALL_FONT. The text of the pool ball font should be white.

drawPoolBall(Color.orange, 5, 100, 100);
drawPoolBall(Color.green, 6, 50, 200);
drawPoolBall(Color.red, 3, 150, 350);
drawPoolBall(Color.blue, 2, 250, 140);

To center the numbers on the pool ball, you should use the getWidth() and getHeight() methods. You are allowed to call these methods on your Text object, such as txt.getWidth().

*/

/*

Information:

The Colors of Billiard (Pool) Balls: 
* A standard set of pool
* balls includes a white cue ball and 15 object balls:
* seven solid-colored balls (yellow, blue, red, purple,
* orange, green, and maroon), seven striped balls that
* match the solid colors, and one black 8-ball.

*/

// --- Constants ---
const POOL_BALL_RADIUS = 40; // The radius of each pool ball.
const POOL_BALL_FONT = "30pt Arial"; // The font that will be used for the numbers on each ball.

/*

  Function: drawPoolBall
  ----------------------
  Draws a single pool ball with a specific color, number, and position.

  Parameters:
    color → the color of the pool ball.
    num → the number displayed on the ball.
    x, y → the central coordinates for the ball.
    
*/

function drawPoolBall(color, num, x, y) {
    // Creates the main circular ball needed.
    let circle = new Circle(POOL_BALL_RADIUS);
    circle.setColor(color);
    circle.setPosition(x, y);
    add(circle);

    // Creates the number label that will go on the center of the ball.
    let txt = new Text(num, POOL_BALL_FONT);
    txt.setColor(Color.white);

    // Centers the number text inside the ball.
    // Subtracting half the text's width centers it left to right.
    let textX = x - txt.getWidth() / 2;
    // Text is positioned from its bottom edge, so adding a quarter of its height moves it down to look centered.
    let textY = y + txt.getHeight() / 4;
    txt.setPosition(textX, textY);

    add(txt);
}

/*

  Function: start
  ---------------
  Draws several pool balls in different colors and positions.
  
*/

function start() {
    drawPoolBall(Color.orange, 5, 100, 100); // Orange 5-ball
    drawPoolBall(Color.green, 6, 50, 200); // Green 6-ball
    drawPoolBall(Color.red, 3, 150, 350); // Red 3-ball
    drawPoolBall(Color.blue, 2, 250, 140); // Blue 2-ball
    drawPoolBall(Color.yellow, 1, 350, 400); // Yellow 1-ball
    drawPoolBall("#800000", 7, 270, 270); // Maroon 7-ball
}
