// prompt() only exists in web browsers. In Node.js, prompt-sync adds it,
// so the rest of the program works the same way.
const prompt = require("prompt-sync")({ sigint: true });

/*
Write a program that keeps track of a simple inventory for a store. While there are still items left in the inventory, ask the user how many items they would like to buy. Then print out how many are left in inventory after the purchase. You should use a while loop for this problem. A sample run is below.

We have 20 items in inventory.
How many would you like to buy? 4
Now we have 16 left.
We have 16 items in inventory.
How many would you like to buy? 2
Now we have 14 left.
We have 14 items in inventory.
How many would you like to buy? 8
Now we have 6 left.
We have 6 items in inventory.
How many would you like to buy? 5
Now we have 1 left.
We have 1 items in inventory.
How many would you like to buy? 1
All out!
Make sure you catch the case where the user tries to buy more items than there are in the inventory. In that case, you should print a message to the user saying that their request isn't possible. For example:

We have 5 items in inventory.
How many would you like to buy? 6
There is not enough in inventory for that purchase.
We have 5 items in inventory.
How many would you like to buy? 5
All out!
*/

(function() {
  const STARTING_ITEMS_IN_INVENTORY = 20;

  function start() {
    let numItems = STARTING_ITEMS_IN_INVENTORY;

    // Uses a while loop to continue as long as there are items in the inventory.
    while (numItems > 0) {
      // Prints the current inventory status, with a singular "item" for 1 item.
      if (numItems === 1) {
        console.log("We have 1 item in inventory.");
      } else {
        console.log("We have " + numItems + " items in inventory.");
      }

      // Gets the user input for the number of items they would like to buy.
      // The prompt() function returns a string, so the parseInt() function is needed to convert it to an integer.
      let itemsToBuy = parseInt(prompt("How many would you like to buy? "));

      // Checks for invalid input: letters (NaN), zero, or negative numbers.
      if (isNaN(itemsToBuy) || itemsToBuy <= 0) {
        console.log("Please enter a whole number greater than 0.");
      }
      // Checks if the user is trying to buy more than what's in the inventory.
      else if (itemsToBuy > numItems) {
        console.log("There is not enough in inventory for that purchase.");
      } else {
        // Updates the inventory with a valid purchase.
        numItems -= itemsToBuy;

        // Prints the remaining items or an "All out!" message.
        if (numItems > 0) {
          console.log("Now we have " + numItems + " left.");
        } else {
          console.log("All out!");
        }
      }
    }
  }

  // Calls the function to start the program
  start();
})();

/*
This defines an anonymous function that contains the start() function. The outer parentheses turn the function into a function expression, and the final pair of parentheses (the "()" at the end) calls it immediately when the program is run.
*/
