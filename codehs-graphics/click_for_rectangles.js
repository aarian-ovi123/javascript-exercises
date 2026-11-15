/* 
Program Result
 
Create a program that draws a rectangle 20 pixels wide and 30 pixels tall whenever you click the mouse. The position of the rectangle should be wherever the user clicks their mouse.

Bonus Challenge: Use the DOCS tab and the Randomizer.nextColor(); command to change the color of your rectangle every time you click the mouse.
*/

//This program draws a rectangle wherever the user clicks
function start(){
	mouseClickMethod(drawRectangle);
}

function drawRectangle(e){
	var rect = new Rectangle(20, 30); //Draws the Rectangle as 20 px wide by 30 px tall.
	rect.setPosition(e.getX(), e.getY()); //Draws the Rectangle wherever the user clicks.
	rect.setColor(Randomizer.nextColor()); //Draws the Rectangle as a random color.
	add(rect);
}
