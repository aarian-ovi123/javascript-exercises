// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

/*

Write a function called isEven that returns a boolean of whether or not a value is even or odd. The isEven function should not print anything out or return a number. It should only take in a number and return a boolean.

Note: Be sure to include comments for all functions that you use or create.

For example, if you made a call like

var isEvenNumber = isEven(4);
isEvenNumber should have the value true.

Once you've written this function, write a program that asks the user for integers and prints whether the number they entered is even or odd using your isEven function. You should let the user keep entering numbers until they enter the SENTINEL.

Here is a sample run of the program:

Enter a number: 5
Odd
Enter a number 42
Even
Enter a number: -6
Even
Enter a number: 0
Done!

*/

/*

  Function: isEven(num)
  ---------------------
  Returns the boolean value of true if the given number is even, and false if it is odd.
  - Parameters: num (number) → the number to check.
  - Returns: boolean → true if even, false if odd.
  
*/

// The sentinel value to stop the loop. It never changes, so it's a const.
const SENTINEL = 0;

function isEven(num) {
  // A number is even if it divides evenly by 2.
  return num % 2 === 0;
}
/*

  Function: start()
  -----------------
  Main program loop.
  - Repeatedly prompts the user for a number.
  - Uses isEven() to determine if the number is even or odd.
  - Stops when the user enters the sentinel value (0).
  
*/

function start() {
  while (true) {
    // Asks the user for a number.
    let num = parseInt(prompt("Enter a number: "));

    // Checks for sentinel value to end the program.
    if (num === SENTINEL) {
      console.log("Done!");
      break;
    }
    // If the user typed something that isn't a number, it asks again.
    if (isNaN(num)) {
      console.log("That's not a number. Please try again.");
      continue;
    }
    // Use the isEven function to check the number
    if (isEven(num)) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
}

// CodeHS runs start() automatically. Node.js doesn't, so it's called here.
start();
